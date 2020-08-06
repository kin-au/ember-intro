import Route from "@ember/routing/route";

export default class ScientistsRoute extends Route {
  // model() is a method of the scientists route, here you return the data that you want available to the template
  model() {
    console.log("me scientists");
    return ["Todd Chavez", "Ali G", "Taylor Swift"];
  }
}
