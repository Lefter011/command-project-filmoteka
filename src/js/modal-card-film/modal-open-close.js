import { refs } from './modal-refs';
import { onWatchedClick, WATCHED_KEY } from './add-to-watched';
import { onQueueClick, LINE_KEY } from './add-to-queue';
import { localStore } from '../utils/loc-storage';

refs.openBtn.addEventListener('click', onOpenBtnClick);
refs.closeBtn.addEventListener('click', onCloseBtnClick);

function onOpenBtnClick(evt) {
  refs.backdrop.classList.remove('is-hidden');
  refs.modal.classList.add('is-open');
  refs.body.classList.add('modal-shown');
  refs.body.addEventListener('click', onBackdropClick);
  window.addEventListener('keydown', onEscClick);
  addBtnsListeners();
  saveKeysToStorage();
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

function addBtnsListeners() {
  const queueBtn = document.querySelector('button[data-modal-queue]');
  const watchedBtn = document.querySelector('button[data-modal-watched]');
  queueBtn.addEventListener('click', onQueueClick);
  watchedBtn.addEventListener('click', onWatchedClick);
}

function saveKeysToStorage() {
  let savedWatched = localStore.load(WATCHED_KEY);
  savedWatched = savedWatched ? savedWatched : [];
  localStore.save(WATCHED_KEY, savedWatched);

  let savedLine = localStore.load(LINE_KEY);
  LINE_KEY = LINE_KEY ? LINE_KEY : [];
  localStore.save(LINE_KEY, savedLine);
}
