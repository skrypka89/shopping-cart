import ModalComponent from './components/ModalComponent.js';
import SortComponent from './components/SortComponent.js';
import CurrencyComponent from './components/CurrencyComponent.js';
import setRates from './helperFunctions/setRates.js';
import getItemsData from './helperFunctions/getItemsData.js';

//Initial script which declares all used components

const modalComponent = new ModalComponent(document.body);
modalComponent.render();

const initialItems = document.querySelectorAll('.shop-item'); //initial sorting of the shop items
const sortComponent = new SortComponent(document, initialItems);
sortComponent.render();

const initialData = getItemsData(initialItems);
const currencyComponent = new CurrencyComponent(document, initialData);
currencyComponent.render();

setRates();