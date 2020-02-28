import store from "../store/index.js";

export default function modifyPriceHeading(priceHeading) {
  const currencyState = store.state.currency;
  const currencyString = (currencyState == 'USD') ? '\u0024' :
    (currencyState == 'EUR' ) ? '\u20AC' :
    (currencyState == 'GBP') ? '\u00A3' : '\u20B4'
  ;

  priceHeading.dataset.currency = currencyString;
}