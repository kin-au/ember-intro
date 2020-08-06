import Component from "@glimmer/component";
import { action } from "@ember/object";

// create a basic component class and add a method (i.e. a function that belongs to a class) that accepts a person as argument
export default class PeopleListComponent extends Component {
  // "@action" is a decorator, indicating that we want to use this method as an action in our template
  @action
  showPerson(person) {
    alert(`The person's name is ${person}`);
  }
}
