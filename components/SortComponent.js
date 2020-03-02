import Component from "./Component.js";
import store from "../store/index.js";
import changeSorting from "../helperFunctions/changeSorting.js";
import sortItems from "../helperFunctions/sortItems.js";

//SortComponent sets the sorting of the shop items
export default class SortComponent extends Component {
  constructor(anchor, initialItems) {
    super(['sort'], store);

    this.anchor = anchor;
    this.initialItems = initialItems;
  }

  render() {
    this.anchor.forms.selects.sorting.addEventListener('change', changeSorting);
    sortItems(this.anchor.querySelector('main'), this.initialItems);
  }
}