import store from "../store/index.js";

//Update information about currency in the storage
export default function changeCurrency() {
  store.dispatch('changeCurrency', ['currency', 'modal'], this[this.selectedIndex].value);
}