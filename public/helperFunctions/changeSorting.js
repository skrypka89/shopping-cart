import store from "../store/index.js";
import scrollToTop from "./scrollToTop.js";

//Update information about sorting in the storage
export default function changeSorting() {
  store.dispatch('changeSorting', ['sort'], this[this.selectedIndex].value);
  scrollToTop();
}