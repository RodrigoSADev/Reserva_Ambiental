export default function initModal() {
  const openBtn = document.querySelector(".js-open-modal");
  const closeBtn = document.querySelector(".js-close-modal");
  const containerModal = document.querySelector(".js-modal");

  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle("active");
  }
  openBtn.addEventListener("click", toggleModal);
  closeBtn.addEventListener("click", toggleModal);

  function outsideClickModal(event) {
    if (event.target === containerModal) {
      toggleModal(event);
    }
  }
  containerModal.addEventListener("click", outsideClickModal);
}
