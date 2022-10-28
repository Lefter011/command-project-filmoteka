const refs = {
  body: document.body,
  openBtn: document.querySelector('button[data-modal-open]'),
  closeBtn: document.querySelector('button[data-modal-close]'),
  backdrop: document.querySelector('div[data-modal]'),
};

refs.openBtn.addEventListener('click', onOpenBtnClick);
function onOpenBtnClick() {
  refs.backdrop.classList.remove('is-hidden');
}

refs.closeBtn.addEventListener('click', onCloseBtnClick);
function onCloseBtnClick() {
  refs.backdrop.classList.add('is-hidden');
}
