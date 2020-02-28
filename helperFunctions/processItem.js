import store from "../store/index.js";

export default function processItem(event) {
  if (event.target.className != 'cart-button') return;

  const table = event.target.closest('table');
  const heading = table.querySelector('.heading').firstChild.data.trim();
  const price = parseFloat(table.querySelector('.price')
    .firstChild.data.trim().replace(/,/, '')
  );

  store.dispatch('addItem', ['modal'], { heading, price });
}