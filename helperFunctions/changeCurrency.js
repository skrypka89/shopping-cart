import store from "../store/index.js";

export default function changeCurrency() {
  store.dispatch('changeCurrency', ['currency', 'modal'], this[this.selectedIndex].value);
}