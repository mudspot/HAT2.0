package dalapi.service

import dal.SlickPostgresDriver.simple._
import dal.Tables._
import dalapi.DatabaseInfo
import dalapi.models._
import org.joda.time.LocalDateTime
import spray.http.MediaTypes._
import spray.http.StatusCodes._
import spray.httpx.SprayJsonSupport._
import spray.routing._

import scala.util.{Failure, Success, Try}

trait EntityServiceApi extends HttpService with EntityService with DatabaseInfo {

  import JsonProtocol._

  def createApi = path("") {
    post {
      createEntity
    }
  }

  def getApi = path(IntNumber) { (entityId: Int) =>
    get {
      db.withSession { implicit session =>
        val result = entityKind match {
          case "person" => getPerson(entityId)
          case "thing" => getThing(entityId)
          case "event" => getEvent(entityId)
          case "location" => getLocation(entityId)
          case "organisation" => getOrganisation(entityId)
          case _ => None
        }

        complete {
          result match {
            case Some(entity: ApiPerson) =>
              entity
            case Some(entity: ApiThing) =>
              entity
            case Some(entity: ApiEvent) =>
              entity
            case Some(entity: ApiLocation) =>
              entity
            case Some(entity: ApiOrganisation) =>
              entity
            case _ =>
              (NotFound, s"$entityKind with ID $entityId not found")
          }
        }
      }
    }
  }

  def linkToLocation = path(IntNumber / "location" / IntNumber) { (entityId: Int, locationId: Int) =>
    post {
      entity(as[ApiRelationship]) { relationship =>
        db.withSession { implicit session =>
          val recordId = createRelationshipRecord(s"$entityKind/$entityId/location/$locationId:${relationship.relationshipType}")

          val result = createLinkLocation(entityId, locationId, relationship.relationshipType, recordId)

          complete {
            result match {
              case Success(crossrefId) =>
                (Created, ApiGenericId(crossrefId))
              case Failure(e) =>
                (BadRequest, e.getMessage)
            }
          }

        }
      }
    }
  }

  def linkToOrganisation = path(IntNumber / "organisation" / IntNumber) { (entityId: Int, organisationId: Int) =>
    post {
      entity(as[ApiRelationship]) { relationship =>
        db.withSession { implicit session =>
          val recordId = createRelationshipRecord(s"$entityKind/$entityId/organisation/$organisationId:${relationship.relationshipType}")

          val result = createLinkOrganisation(entityId, organisationId, relationship.relationshipType, recordId)

          complete {
            result match {
              case Success(crossrefId) =>
                (Created, ApiGenericId(crossrefId))
              case Failure(e) =>
                (BadRequest, e.getMessage)
            }
          }

        }
      }
    }
  }

  def linkToPerson = path(IntNumber / "person" / IntNumber) { (entityId: Int, personId: Int) =>
    post {
      entity(as[ApiRelationship]) { relationship =>
        db.withSession { implicit session =>
          val recordId = createRelationshipRecord(s"$entityKind/$entityId/person/$personId:${relationship.relationshipType}")

          val result = createLinkPerson(entityId, personId, relationship.relationshipType, recordId)

          // Return the created crossref
          complete {
            result match {
              case Success(crossrefId) =>
                (Created, ApiGenericId(crossrefId))
              case Failure(e) =>
                (BadRequest, e.getMessage)
            }
          }

        }
      }
    }
  }

  def linkToThing = path(IntNumber / "thing" / IntNumber) { (entityId: Int, thingId: Int) =>
    post {
      entity(as[ApiRelationship]) { relationship =>
        db.withSession { implicit session =>
          val recordId = createRelationshipRecord(s"$entityKind/$entityId/thing/$thingId:${relationship.relationshipType}")

          val result = createLinkThing(entityId, thingId, relationship.relationshipType, recordId)

          // Return the created crossref
          complete {
            result match {
              case Success(crossrefId) =>
                (Created, ApiGenericId(crossrefId))
              case Failure(e) =>
                (BadRequest, e.getMessage)
            }
          }

        }
      }
    }
  }

  def linkToEvent = path(IntNumber / "event" / IntNumber) { (entityId: Int, eventId: Int) =>
    post {
      entity(as[ApiRelationship]) { relationship =>
        db.withSession { implicit session =>
          val recordId = createRelationshipRecord(s"$entityKind/$entityId/event/$eventId:${relationship.relationshipType}")

          val result = createLinkEvent(entityId, eventId, relationship.relationshipType, recordId)

          // Return the created crossref
          complete {
            result match {
              case Success(crossrefId) =>
                (Created, ApiGenericId(crossrefId))
              case Failure(e) =>
                (BadRequest, e.getMessage)
            }
          }

        }
      }
    }
  }

  def getPropertiesStaticApi = path(IntNumber / "property" / "static") {
    (entityId: Int) =>
      get {
        db.withSession { implicit session: Session =>
          complete {
            getPropertiesStatic(entityId)
          }
        }
      }
  }

  def getPropertiesDynamicApi = path(IntNumber / "property" / "dynamic") {
    (entityId: Int) =>
      get {
        db.withSession { implicit session: Session =>
          complete {
            getPropertiesDynamic(entityId)
          }
        }
      }
  }

  /*
   * Tag event with a type
   */
  def addType = path(IntNumber / "type" / IntNumber) { (entityId: Int, typeId: Int) =>
    post {
      entity(as[ApiRelationship]) { relationship =>
        db.withSession { implicit session =>
          val result = addEntityType(entityId, typeId, relationship)

          complete {
            result match {
              case Success(crossrefId) =>
                (Created, ApiGenericId(crossrefId))
              case Failure(e) =>
                (BadRequest, e.getMessage)
            }
          }
        }
      }

    }
  }

  /*
   * Link event to a property statically (tying it in with a specific record ID)
   */
  def linkToPropertyStatic = path(IntNumber / "property" / "static" / IntNumber) { (entityId: Int, propertyId: Int) =>
    post {
      entity(as[ApiPropertyRelationshipStatic]) { relationship =>
        val result: Try[Int] = (relationship.field.id, relationship.record.id) match {
          case (Some(fieldId), Some(recordId)) =>
            val propertyRecordId = createPropertyRecord(
              s"$entityKind/$entityId/property/static/$propertyId:${relationship.relationshipType}($fieldId,$recordId,${relationship.relationshipType}")

            db.withSession { implicit session =>
              createPropertyLinkStatic(entityId, propertyId, recordId, fieldId, relationship.relationshipType, propertyRecordId)
            }
          case (None, _) =>
            Failure(new IllegalArgumentException("Property relationship must have an existing Data Field with ID"))
          case (_, None) =>
            Failure(new IllegalArgumentException("Static Property relationship must have an existing Data Record with ID"))
        }

        complete {
          result match {
            case Success(crossrefId) =>
              (Created, ApiGenericId(crossrefId))
            case Failure(e) =>
              (BadRequest, e.getMessage)
          }
        }

      }
    }
  }

  /*
   * Link event to a property dynamically
   */
  def linkToPropertyDynamic = path(IntNumber / "property" / "dynamic" / IntNumber) { (entityId: Int, propertyId: Int) =>
    post {
      entity(as[ApiPropertyRelationshipDynamic]) { relationship =>
        val result: Try[Int] = relationship.field.id match {
          case Some(fieldId) =>
            val propertyRecordId = createPropertyRecord(
              s"""$entityKind/$entityId/property/dynamic/$propertyId:${relationship.relationshipType}
                  |($fieldId,${relationship.relationshipType})""".stripMargin)

            db.withSession { implicit session =>
              createPropertyLinkDynamic(entityId, propertyId, fieldId, relationship.relationshipType, propertyRecordId)
            }
          case None =>
            Failure(new IllegalArgumentException("Property relationship must have an existing Data Field with ID"))
        }

        complete {
          result match {
            case Success(crossrefId) =>
              (Created, ApiGenericId(crossrefId))
            case Failure(e) =>
              (BadRequest, e.getMessage)
          }
        }
      }
    }
  }

  protected def createRelationshipRecord(relationshipName: String) = {
    db.withSession { implicit session =>
      val newRecord = new SystemRelationshiprecordRow(0, LocalDateTime.now(), LocalDateTime.now(), relationshipName)
      val recordId = (SystemRelationshiprecord returning SystemRelationshiprecord.map(_.id)) += newRecord
      recordId
    }
  }

  protected def createPropertyRecord(relationshipName: String) = {
    db.withSession { implicit session =>
      val newRecord = new SystemPropertyrecordRow(0, LocalDateTime.now(), LocalDateTime.now(), relationshipName)
      val recordId = (SystemPropertyrecord returning SystemRelationshiprecord.map(_.id)) += newRecord
      recordId
    }
  }

}