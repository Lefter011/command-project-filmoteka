(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    footermodal: document.querySelector("[data-modal]"),    
    body:  document.querySelector("body"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.footermodal.classList.toggle("visually-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();