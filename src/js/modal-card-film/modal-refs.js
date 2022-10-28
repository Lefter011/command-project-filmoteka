export const refs = {
  body: document.body,
  openBtn: document.querySelector('button[data-modal-open]'),
  closeBtn: document.querySelector('button[data-modal-close]'),
  backdrop: document.querySelector('div[data-modal]'),
  modal: document.querySelector('div.js-movie-card'),
  containerForInfo: document.querySelector('div.modal__content'),
};

console.log(refs.containerForInfo);

refs.openBtn.addEventListener('click', onOpenBtnClick);
function onOpenBtnClick() {
  refs.backdrop.classList.remove('is-hidden');
  refs.modal.classList.add('is-open');
  refs.body.classList.add('modal-shown');
}

refs.closeBtn.addEventListener('click', onCloseBtnClick);
function onCloseBtnClick() {
  refs.backdrop.classList.add('is-hidden');
}
