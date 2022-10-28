function footermodal() {
  const refs = {
    openFooterModal: document.getElementById("data-modal-open"),
    closeFooterModalBtn: document.getElementById("data-modal-close"),
    modalfooter: document.getElementById("data-modal"),
    body: document.querySelector("body"),
  };
  
  onclick = function () {
    modalfooter.style.display = "block";
  }

  close.onclick = function () {
    modalfooter.style.display = "none";


    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
      // refs.openFooterModal.addEventListener("click", toggleModal);
      // refs.closeFooterModalBtn.addEventListener("click", toggleModal);

      // function toggleModal() {
      //   refs.modal.classList.toggle("visually-hidden");
      //    refs.body.classList.toggle("no-scroll");
      //  };
    }
  }
}
 