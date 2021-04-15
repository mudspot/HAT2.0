/*
 * Copyright (C) 2017 HAT Data Exchange Ltd
 * SPDX-License-Identifier: AGPL-3.0
 *
 * This file is part of the Hub of All Things project (HAT).
 *
 * HAT is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License
 * as published by the Free Software Foundation, version 3 of
 * the License.
 *
 * HAT is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See
 * the GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General
 * Public License along with this program. If not, see
 * <http://www.gnu.org/licenses/>.
 *
 * Written by Andrius Aucinas <andrius.aucinas@hatdex.org>
 * 2 / 2017
 */

import sbt._

object Dependencies {

  private object Version {
    val Play: String          = play.core.PlayVersion.current
    val PlayJson              = "2.9.2"
    val Silhouette            = "5.2.0"
    val AtlassianJwt          = "3.2.0"
    val AwsSdk                = "1.11.999"
    val AlpakkaAwsLambda      = "1.1.2"
    val CommonsLang3          = "3.11"
    val BouncyCastle          = "1.68"
    val PlayPrometheusFilters = "0.6.1"
    val PlayGuard             = "2.5.0"
    val PrettyTime            = "5.0.0.Final"
    val Nbvcxz                = "1.5.0"
    val PlayMemcached         = "0.11.0"
    val Adjudicator           = "0.1.3.1"
    val DexClient             = "3.2.1"
    val DsBackend             = "2.2.1"
    val DsTestTools           = "0.2.4"
    val MockitoCore           = "3.9.0"
    val ScalaPlayTestMock     = "3.2.7.0"
    val Janino                = "3.1.3"
    val CirceConfig           = "0.8.0"
    val ScalaGuice            = "4.2.11"
    val HatDexSlickPGDriver   = "0.1.2"
  }

  val resolvers = Seq(
    Resolver.jcenterRepo,
    "Atlassian Releases" at "https://maven.atlassian.com/public/",
    Resolver.bintrayRepo("scalaz", "releases"),
    "HAT Library Artifacts Snapshots" at "https://s3-eu-west-1.amazonaws.com/library-artifacts-snapshots.hubofallthings.com",
    "HAT Library Artifacts Releases" at "https://s3-eu-west-1.amazonaws.com/library-artifacts-releases.hubofallthings.com"
  )

  object Library {

    object Play {
      val ws        = "com.typesafe.play"   %% "play-ws"        % Version.Play
      val cache     = "com.typesafe.play"   %% "play-cache"     % Version.Play
      val test      = "com.typesafe.play"   %% "play-test"      % Version.Play
      val jdbc      = "com.typesafe.play"   %% "play-jdbc"      % Version.Play
      val json      = "com.typesafe.play"   %% "play-json"      % Version.PlayJson
      val jsonJoda  = "com.typesafe.play"   %% "play-json-joda" % Version.PlayJson
      val playGuard = "com.digitaltangible" %% "play-guard"     % Version.PlayGuard

      object Jwt {
        val bouncyCastle     = "org.bouncycastle"  % "bcprov-jdk15on" % Version.BouncyCastle
        val bouncyCastlePkix = "org.bouncycastle"  % "bcpkix-jdk15on" % Version.BouncyCastle
        val atlassianJwtCore = "com.atlassian.jwt" % "jwt-core"       % Version.AtlassianJwt
      }

      object Silhouette {
        val passwordBcrypt    = "com.mohiva" %% "dataswift-play-silhouette-password-bcrypt" % Version.Silhouette
        val persistence       = "com.mohiva" %% "dataswift-play-silhouette-persistence"     % Version.Silhouette
        val cryptoJca         = "com.mohiva" %% "dataswift-play-silhouette-crypto-jca"      % Version.Silhouette
        val silhouette        = "com.mohiva" %% "dataswift-play-silhouette"                 % Version.Silhouette
        val silhouetteTestkit = "com.mohiva" %% "dataswift-play-silhouette-testkit"         % Version.Silhouette % Test
      }
    }

    object Utils {
      val awsJavaS3Sdk     = "com.amazonaws"          % "aws-java-sdk-s3"               % Version.AwsSdk
      val awsJavaSesSdk    = "com.amazonaws"          % "aws-java-sdk-ses"              % Version.AwsSdk
      val awsJavaLambdaSdk = "com.amazonaws"          % "aws-java-sdk-lambda"           % Version.AwsSdk
      val prettyTime       = "org.ocpsoft.prettytime" % "prettytime"                    % Version.PrettyTime
      val nbvcxz           = "me.gosimple"            % "nbvcxz"                        % Version.Nbvcxz
      val alpakkaAwsLambda = "com.lightbend.akka"    %% "akka-stream-alpakka-awslambda" % Version.AlpakkaAwsLambda
      val apacheCommonLang = "org.apache.commons"     % "commons-lang3"                 % Version.CommonsLang3
      val playMemcached    = "com.github.mumoshu"    %% "play2-memcached-play28"        % Version.PlayMemcached
    }

    object Backend {
      val logPlay = "io.dataswift" %% "log-play" % Version.DsBackend
    }

    object HATDeX {
      val dexClient = "org.hatdex" %% "dex-client-scala"      % Version.DexClient
      val codegen   = "org.hatdex" %% "slick-postgres-driver" % Version.HatDexSlickPGDriver
    }

    val scalaGuice  = "net.codingwell"     %% "scala-guice"  % Version.ScalaGuice
    val circeConfig = "io.circe"           %% "circe-config" % Version.CirceConfig
    val janino      = "org.codehaus.janino" % "janino"       % Version.Janino

    object ContractLibrary {
      val adjudicator = "io.dataswift" %% "adjudicatorlib" % Version.Adjudicator
    }

    object Prometheus {
      val filters = "io.github.jyllands-posten" %% "play-prometheus-filters" % Version.PlayPrometheusFilters
    }

    object ScalaTest {
      val scalaplaytestmock = "org.scalatestplus" %% "mockito-3-4"  % Version.ScalaPlayTestMock % Test
      val mockitoCore       = "org.mockito"        % "mockito-core" % Version.MockitoCore       % Test
    }

    object Dataswift {
      val integrationTestCommon = "io.dataswift" %% "integration-test-common" % Version.DsTestTools % Test
    }
  }
}
