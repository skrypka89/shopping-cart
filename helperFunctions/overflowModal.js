//Fix the height of the modal window when the latter is overflowed
export default function overflowModal(modal) {
  const modalContent = modal.querySelector('.modal-content');
  const margins = 40;
  const marginsAndPaddings = 75;

  if (modalContent.scrollHeight > modal.offsetHeight - margins) {
    modalContent.style.overflowY = 'scroll';
    modalContent.style.height = modal.offsetHeight - marginsAndPaddings + 'px';
  } else {
    modalContent.style.overflowY = 'auto';
    modalContent.style.height = 'auto';
  }
}