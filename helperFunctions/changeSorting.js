import store from "../store/index.js";
import scrollToTop from "./scrollToTop.js";

export default function changeSorting() {
  store.dispatch('changeSorting', 'select', this[this.selectedIndex].value);
  scrollToTop();
}