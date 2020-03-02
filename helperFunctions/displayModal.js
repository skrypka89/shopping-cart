import overflowModal from "./overflowModal.js";

//Show or hide the modal window
export default function displayModal() {
  const modal = this.closest('header').previousElementSibling;
  const closeModal = modal.querySelector('.close-modal-span');

  modal.style.display = 'flex';
  overflowModal(modal);

  closeModal.onclick = function() {
    modal.style.display = 'none';
  };

  window.onclick = function(event) {
    if (event.target == modal) modal.style.display = 'none';
  };
}