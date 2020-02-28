import Component from "./Component.js";
import store from "../store/index.js";
import changeCurrency from "../helperFunctions/changeCurrency.js";
import switchPrices from "../helperFunctions/switchPrices.js";

export default class CurrencyComponent extends Component {
  constructor(anchor, initialData) {
    super(['currency'], store);

    this.anchor = anchor;
    this.initialData = initialData;
  }

  render() {
    this.anchor.forms.selects.currency.addEventListener('change', changeCurrency);
    switchPrices(this.anchor, this.initialData);
  }
}