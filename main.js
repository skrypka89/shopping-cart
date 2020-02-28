import ModalComponent from './components/ModalComponent.js';
import SelectComponent from './components/SelectComponent.js';
import CurrencyComponent from './components/CurrencyComponent.js';
import setRates from './helperFunctions/setRates.js';
import getItemsData from './helperFunctions/getItemsData.js';

const modalComponent = new ModalComponent(document.body);
modalComponent.render();

const initialItems = document.querySelectorAll('.shop-item');
const selectComponent = new SelectComponent(document, initialItems);
selectComponent.render();

const initialData = getItemsData(initialItems);
const currencyComponent = new CurrencyComponent(document, initialData);
currencyComponent.render();

setRates();