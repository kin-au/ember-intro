import Route from "@ember/routing/route";

export default class FriendsRoute extends Route {
  model() {
    console.log("me friends");
    return ["Pearl", "Chuck", "Freddy"];
  }
}
