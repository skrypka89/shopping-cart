import store from "../store/index.js";

//Shop item removing in the modal window
export default function removeItem(buttonElements) {
  buttonElements.forEach((button, id) =>
    button.addEventListener('click', () =>
      store.dispatch('removeItem', ['modal'], { id })
    )
  );
}