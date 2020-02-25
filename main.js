import ModalComponent from './components/ModalComponent.js';
import SelectComponent from './components/SelectComponent.js';

const modalComponent = new ModalComponent(document.body);
modalComponent.render();

const initial = document.querySelectorAll('.shop-item');
const selectComponent = new SelectComponent(document, initial);
selectComponent.render();