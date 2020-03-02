/* Whether show or not the counter on the cart icon and the buttons
under the table in the modal window */
export default function hideElements(anchor, itemsNum) {
  if (itemsNum) {
    anchor.querySelector('.counter').innerHTML = itemsNum;
    anchor.querySelector('.counter').hidden = false;
    anchor.querySelector('#modal-buttons').style.display = 'flex';
  } else {
    anchor.querySelector('.counter').hidden = true;
    anchor.querySelector('#modal-buttons').style.display = 'none';
  }
}