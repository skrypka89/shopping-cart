export default function overflowModal(modal) {
  const modalContent = modal.querySelector('.modal-content');

  if (modalContent.scrollHeight > modal.offsetHeight - 40) {
    modalContent.style.overflowY = 'scroll';
    modalContent.style.height = modal.offsetHeight - 80 + 'px';
  } else {
    modalContent.style.overflowY = 'auto';
    modalContent.style.height = 'auto';
  }
}