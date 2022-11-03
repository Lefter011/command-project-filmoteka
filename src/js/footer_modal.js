(() => {
  const refs = {
    openFooterModalBtn: document.querySelector("[data-modal-open-1]"),
    closeFooterModalBtn: document.querySelector("[data-modal-close-1]"),
    modalFooter: document.querySelector("[data-modal-1]"),
    body: document.querySelector("body"),
  };

  refs.openFooterModalBtn.addEventListener('click', toggleModal);
  refs.closeFooterModalBtn.addEventListener('click', toggleModal)

  function toggleModal() {
    refs.modalFooter.classList.toggle("visually-hidden");
    refs.body.classList.toggle('no-scroll')
  }
})();
 