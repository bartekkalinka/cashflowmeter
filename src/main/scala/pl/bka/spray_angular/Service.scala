package pl.bka.spray_angular

import akka.actor.Actor
import spray.routing._

// we don't implement our route structure directly in the service actor because
// we want to be able to test it independently, without having to spin up an actor
class ShapeGenServiceActor extends Actor with ShapeGenService {

  // the HttpService trait defines only one abstract member, which
  // connects the services environment to the enclosing actor or test
  def actorRefFactory = context

  // this actor only runs our route, but you could add
  // other things here, like request stream processing
  // or timeout handling
  def receive = runRoute(mainRoute)
}

// this trait defines our service behavior independently from the service actor
trait ShapeGenService extends HttpService {
  val mainRoute =
    pathPrefix("") {
      getFromResourceDirectory("client")
    }
}