import { refs } from './modal-refs';
import { onWatchedClick, WATCHED_KEY } from './add-to-watched';
import { onQueueClick, LINE_KEY } from './add-to-queue';
import { localStore } from '../utils/loc-storage';
import { checkSavedFilms, checkWatchedFilms } from './check-saved-films';
import ApiService from '../ApiService';
import { createModalCardMarkup, addMarkupToCard } from './render-film';

if (refs.home) {
  refs.home.addEventListener('click', onFilmCardClick);
}

refs.closeBtn.addEventListener('click', onCloseBtnClick);

const api = new ApiService();

export async function onFilmCardClick(evt) {
  evt.preventDefault();
  const targetClick = 'js-modal-trigger';
  if (!evt.target.parentNode.classList.contains(targetClick)) {
    return;
  }
  const parentOne = evt.target.parentNode;
  const filmId = parentOne.parentNode.dataset.id;
  const movie = await api
    .fetchMoviesByID(filmId)
    .then(res => {
      console.log(res);
      return res;
    })
    .catch(console.error());
  const markupDone = createModalCardMarkup(movie);
  addMarkupToCard(markupDone);
  refs.backdrop.classList.remove('is-hidden');
  refs.modal.classList.add('is-open');
  refs.body.classList.add('modal-shown');
  refs.body.addEventListener('click', onBackdropClick);
  window.addEventListener('keydown', onEscClick);
  addBtnsListeners();
  saveKeysToStorage();
}

export function onCloseBtnClick() {
  refs.backdrop.classList.add('is-hidden');
  refs.modal.classList.remove('is-open');
  refs.body.classList.remove('modal-shown');
  refs.body.removeEventListener('click', onBackdropClick);
  window.removeEventListener('keydown', onEscClick);
}

export function onBackdropClick(evt) {
  const target = evt.target.className;
  if (target === 'backdrop') {
    onCloseBtnClick();
  }
}

export function onEscClick(evt) {
  if (evt.code === 'Escape') {
    onCloseBtnClick();
  }
}

export function addBtnsListeners() {
  const queueBtn = document.querySelector('button[data-modal-queue]');
  const watchedBtn = document.querySelector('button[data-modal-watched]');
  queueBtn.addEventListener('click', onQueueClick);
  watchedBtn.addEventListener('click', onWatchedClick);
}

export function saveKeysToStorage() {
  let savedWatched = localStore.load(WATCHED_KEY);
  savedWatched = savedWatched ? savedWatched : [];
  localStore.save(WATCHED_KEY, savedWatched);

  let savedLine = localStore.load(LINE_KEY);
  savedLine = savedLine ? savedLine : [];
  localStore.save(LINE_KEY, savedLine);
}