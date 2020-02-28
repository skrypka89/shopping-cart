import store from "../store/index.js";

export default function switchPrices(anchor, initialData) {
  const currencyState = store.state.currency;
  const rates = store.state.rates;
  const currencyString = (currencyState == 'USD') ? '\u0024' :
    (currencyState == 'EUR' ) ? '\u20AC' :
    (currencyState == 'GBP') ? '\u00A3' : '\u20B4'
  ;

  for (let acronym in rates) {
    anchor.querySelector(`option[value="${acronym}"]`).disabled = !(rates[acronym]);
  }

  store.state.items.forEach(item => {
    const initialDatum = initialData.find(datum => datum.heading == item.heading);
    item.price = (currencyState == 'UAH') ?
      initialDatum.price :
      initialDatum.price / rates[currencyState]
    ;
  });

  anchor.querySelectorAll('.shop-item').forEach(shopItem => {
    const heading = shopItem.querySelector('.heading').firstChild.data.trim();
    const initialDatum = initialData.find(datum => datum.heading == heading);
    const priceElement = shopItem.querySelector('.price');
    priceElement.dataset.currency = currencyString;
    priceElement.innerHTML = (currencyState == 'UAH') ?
      initialDatum.price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") :
      (initialDatum.price / rates[currencyState]).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    ;
  });

  return anchor;
}