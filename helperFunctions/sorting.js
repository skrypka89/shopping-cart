import store from "../store/index.js";
import sortingFunction from "./sortingFunction.js";

export default function sorting(main, initial) {
  const sortingState = store.state.sorting;
  const shopItems = main.querySelectorAll('.shop-item');
  let data = [];

  shopItems.forEach((shopItem, i) =>
    data.push({
      price: parseFloat(
        shopItem.querySelector('.price').firstChild.data.trim().replace(/\s/g, '')
      ),
      heading: shopItem.querySelector('.heading').firstChild.data.trim(),
      index: i
    })
  );

  switch (sortingState) {
    case 'initial':
      initial.forEach(item => main.append(item));
      break;

    case 'price-increase':
      data.sort((a, b) => sortingFunction(a, b, 'price', 'heading', false))
        .forEach(item => main.append(shopItems[item.index]))
      ;
      break;

    case 'price-decrease':
      data.sort((a, b) => sortingFunction(b, a, 'price', 'heading', true))
        .forEach(item => main.append(shopItems[item.index]))
      ;
      break;

    case 'a-z-sorting':
      data.sort((a, b) => sortingFunction(a, b, 'heading', 'price', false))
        .forEach(item => main.append(shopItems[item.index]))
      ;
      break;

    case 'z-a-sorting':
      data.sort((a, b) => sortingFunction(b, a, 'heading', 'price', true))
        .forEach(item => main.append(shopItems[item.index]))
      ;
      break;
  }

  return main;
}