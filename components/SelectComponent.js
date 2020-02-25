import Component from "./Component.js";
import store from "../store/index.js";
import changeSorting from "../helperFunctions/changeSorting.js";
import sorting from "../helperFunctions/sorting.js";

export default class SelectComponent extends Component {
  constructor(anchor, initial) {
    super('select', store);

    this.anchor = anchor;
    this.initial = initial;
  }

  render() {
    this.anchor.forms.select.sorting.addEventListener('change', changeSorting);
    sorting(this.anchor.querySelector('main'), this.initial);
  }
}