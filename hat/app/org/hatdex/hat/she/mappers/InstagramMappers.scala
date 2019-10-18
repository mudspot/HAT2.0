package org.hatdex.hat.she.mappers

import java.util.UUID

import org.hatdex.hat.api.models.{ EndpointQuery, EndpointQueryFilter, FilterOperator, PropertyQuery }
import org.hatdex.hat.api.models.applications.{ DataFeedItem, DataFeedItemContent, DataFeedItemLocation, DataFeedItemMedia, DataFeedItemTitle, LocationAddress, LocationGeo }
import org.hatdex.hat.she.models.StaticDataValues
import org.joda.time.DateTime
import play.api.libs.json.{ JsError, JsNumber, JsObject, JsResult, JsSuccess, JsValue, Json, __ }

import scala.util.Try

class InstagramMediaMapper extends DataEndpointMapper {
  override protected val dataDeduplicationField: Option[String] = Some("id")

  def dataQueries(fromDate: Option[DateTime], untilDate: Option[DateTime]): Seq[PropertyQuery] = {
    val unixDateFilter = fromDate.flatMap { _ =>
      Some(FilterOperator.Between(Json.toJson(fromDate.map(t => (t.getMillis / 1000).toString)), Json.toJson(untilDate.map(t => (t.getMillis / 1000).toString))))
    }

    Seq(PropertyQuery(
      List(EndpointQuery("instagram/feed", None,
        unixDateFilter.map(f ⇒ Seq(EndpointQueryFilter("created_time", None, f))), None)), Some("created_time"), Some("descending"), None))
  }

  def mapDataRecord(recordId: UUID, content: JsValue, tailRecordId: Option[UUID] = None, tailContent: Option[JsValue] = None): Try[DataFeedItem] = {
    for {
      createdTime <- Try(new DateTime((content \ "created_time").as[String].toLong * 1000))
      tags <- Try((content \ "tags").as[List[String]])
      kind <- Try((content \ "type").as[String])
      title <- Try(Some(DataFeedItemTitle("You posted", None, Some(kind))))
      feedItemContent <- Try(Some(DataFeedItemContent(
        (content \ "caption" \ "text").asOpt[String],
        None,
        kind match {
          case "image" =>
            Some(Seq(DataFeedItemMedia(
              (content \ "images" \ "thumbnail" \ "url").asOpt[String],
              (content \ "images" \ "standard_resolution" \ "url").asOpt[String])))
          case "carousel" =>
            Some((content \ "carousel_media").as[Seq[JsObject]].map { imageInfo =>
              DataFeedItemMedia(
                (imageInfo \ "images" \ "thumbnail" \ "url").asOpt[String],
                (imageInfo \ "images" \ "standard_resolution" \ "url").asOpt[String])
            })
          case _ => None
        },
        None)))
    } yield {
      val location = Try(DataFeedItemLocation(
        geo = (content \ "location").asOpt[JsObject]
          .map(location =>
            LocationGeo(
              (location \ "longitude").as[Double],
              (location \ "latitude").as[Double])),
        address = (content \ "location" \ "street_address").asOpt[String]
          .map(fullAddress => LocationAddress(None, None, Some(fullAddress), None, None)),
        tags = None)).toOption

      DataFeedItem("instagram", createdTime, tags, title, feedItemContent, location)
    }
  }
}

class InstagramProfileStaticDataMapper extends StaticDataEndpointMapper {
  def dataQueries(): Seq[PropertyQuery] = {
    Seq(PropertyQuery(
      List(
        EndpointQuery("instagram/profile", None, None, None)), Some("hat_updated_time"), Some("descending"), Some(1)))
  }

  def mapDataRecord(recordId: UUID, content: JsValue, endpoint: String): Seq[StaticDataValues] = {
    val eventualData = content.validate[JsObject]

    eventualData match {
      case JsSuccess(value, _) =>

        val lastPartOfEndpointString = endpoint.split("/").last

        val maybeTransformedData = transformData(value).flatMap(item => item.validate[Map[String, JsValue]])
        maybeTransformedData match {
          case JsSuccess(data, _) =>

            Seq(StaticDataValues(lastPartOfEndpointString, (data - "counts")))
          case e: JsError =>

            logger.error(s"Couldn't validate static data JSON for $endpoint. $e")
            Seq()
        }
      case e: JsError =>
        logger.error(s"Couldn't validate static data JSON for $endpoint. $e")
        Seq()
    }
  }

  private def transformData(rawData: JsObject): JsResult[JsValue] = {
    val transformation = __.json.update(
      __.read[JsObject].map(profile => {
        logger.info(s"Trying to map profile: $profile")
        val totalImagesUploaded = (profile \ "counts" \ "media").asOpt[JsNumber].getOrElse(JsNumber(0))
        val totalFollowers = (profile \ "counts" \ "followed_by").asOpt[JsNumber].getOrElse(JsNumber(0))
        val totalPeopleUsersFollows = (profile \ "counts" \ "follows").asOpt[JsNumber].getOrElse(JsNumber(0))

        profile ++ JsObject(Map(
          "media" -> totalImagesUploaded,
          "follows" -> totalPeopleUsersFollows,
          "followers" -> totalFollowers))
      }))

    rawData.transform(transformation)
  }
}