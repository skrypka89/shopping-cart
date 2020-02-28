import store from "../store/index.js";

export default function removeItem(buttonElements) {
  buttonElements.forEach((button, id) =>
    button.addEventListener('click', () =>
      store.dispatch('removeItem', ['modal'], { id })
    )
  );
}