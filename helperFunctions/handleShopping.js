import store from "../store/index.js";

export default function handleShopping(event, noticeColor, noticeText) {
  const notice = event.target.closest('body').querySelector('.notice');

  notice.style.display = 'flex';
  notice.style.backgroundColor = noticeColor;
  notice.querySelector('p').innerHTML = noticeText;
  event.target.closest('.modal').style.display = 'none';
  store.dispatch('removeAllItems', ['modal'], undefined);

  notice.querySelector('.close-notice-span').onclick = function() {
    notice.style.display = 'none';
  };
}