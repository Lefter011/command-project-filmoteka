import { refs } from './modal-refs';

refs.openBtn.addEventListener('click', onOpenBtnClick);
refs.closeBtn.addEventListener('click', onCloseBtnClick);

function onOpenBtnClick() {
  refs.backdrop.classList.remove('is-hidden');
  refs.modal.classList.add('is-open');
  refs.body.classList.add('modal-shown');
  refs.body.addEventListener('click', onBackdropClick);
  window.addEventListener('keydown', onEscClick);
}

function onCloseBtnClick() {
  refs.backdrop.classList.add('is-hidden');
  refs.modal.classList.remove('is-open');
  refs.body.classList.remove('modal-shown');
  refs.body.removeEventListener('click', onBackdropClick);
  window.removeEventListener('keydown', onEscClick);
}

function onBackdropClick(evt) {
  const target = evt.target.className;
  if (target === 'backdrop') {
    onCloseBtnClick();
  }
}

function onEscClick(evt) {
  if (evt.code === 'Escape') {
    onCloseBtnClick();
  }
}
