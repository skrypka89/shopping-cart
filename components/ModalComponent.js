import Component from './Component.js';
import store from '../store/index.js';
import processItem from '../helperFunctions/processItem.js';
import displayModal from '../helperFunctions/displayModal.js';
import removeItem from '../helperFunctions/removeItem.js';
import overflowModal from '../helperFunctions/overflowModal.js';
import shoppingResult from '../helperFunctions/shoppingResult.js';
import hiddenElements from '../helperFunctions/hiddenElements.js';

export default class ModalComponent extends Component {
  constructor(anchor) {
    super('modal', store);

    this.anchor = anchor;
  }

  render() {
    const itemsNum = store.state.items.length;
    const totalPrice = (itemsNum) ?
      store.state.items.reduce((sum, shopItem) => sum + shopItem.price, 0) :
      0
    ;

    this.anchor.querySelector('.modal-table').innerHTML = `
      <tr>
        <th class="modal-table-column-1">Название товара</th>
        <th class="modal-table-column-2">Цена, грн</th>
        <th class="modal-table-column-3"></th>
      </tr>
      ${store.state.items.map(shopItem => `
        <tr id="item">
          <td class="modal-table-column-1">${shopItem.heading}</td>
          <td class="modal-table-column-2">
            ${shopItem.price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
          </td>
          <td class="modal-table-column-3">
            <button class="remove-item-button">&times;</button>
          </td>
        </tr>
      `).join('')}
      <tr>
        <td class="modal-table-column-1"><b>Всего</b></td>
        <td class="modal-table-column-2">
          <b>${totalPrice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</b>
        </td>
        <td class="modal-table-column-3"></td>
      </tr>
    `;

    hiddenElements(this.anchor, itemsNum);
    removeItem(this.anchor.querySelectorAll('.remove-item-button'));
    overflowModal(this.anchor.querySelector('.modal'));
    shoppingResult(this.anchor.querySelectorAll('.modal-button'));
    this.anchor.querySelector('main').addEventListener('click', processItem);
    this.anchor.querySelector('.cart').addEventListener('click', displayModal);
  }
}