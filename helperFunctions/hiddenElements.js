export default function hiddenElements(anchor, itemsNum) {
  if (itemsNum) {
    anchor.querySelector('.counter').innerHTML = itemsNum;
    anchor.querySelector('.counter').hidden = false;
    anchor.querySelector('#modal-buttons').style.display = 'flex';
  } else {
    anchor.querySelector('.counter').hidden = true;
    anchor.querySelector('#modal-buttons').style.display = 'none';
  }
}