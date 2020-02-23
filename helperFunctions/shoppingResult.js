import handleShopping from "./handleShopping.js";

export default function shoppingResult(modalButtons) {
  modalButtons.forEach((button, id) => {
    if (id == 0) {
      button.onclick = event => 
        handleShopping(event, 'lightpink', 'Ваш заказ отменен. :(')
      ;
    }

    if (id == 1) {
      button.onclick = event =>
        handleShopping(event, 'lightblue',
          'Поздравляем! ' +
          'Ваш заказ успешно подтверджен и отправлен на обработку. ' +
          'Ждите звонка от нашего сотрудника.'
        )
      ;
    }
  });
}