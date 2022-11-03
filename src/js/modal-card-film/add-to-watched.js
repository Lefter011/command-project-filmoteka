import { localStore } from '../utils/loc-storage';
import { checkWatchedFilms } from './check-saved-films';
import {
  onWatchedClick,
  myLibraryList,
} from '../my-library-create-murkup';

export const WATCHED_KEY = `watched`;

export function onWatchedClick(evt, arg) {
  evt.preventDefault();
  const watchedBtn = document.querySelector('button[data-modal-watched]');
  const savedMovies = localStore.load(WATCHED_KEY);
  const isSaved = checkWatchedFilms(arg);

  if (isSaved) {
    const index = savedMovies.findIndex(movie => movie.id === isSaved.id);
    const deleted = savedMovies.splice(index, 1);
    localStore.save(WATCHED_KEY, savedMovies);
    watchedBtn.textContent = 'Add to watched';
  } else {
    savedMovies.unshift(arg);
    localStore.save(WATCHED_KEY, savedMovies);
    watchedBtn.textContent = 'Remove from watched';
    watchedBtn.style.width = 'fit-content';
    watchedBtn.style.height = 'auto';
  }

  myLibraryList.insertAdjacentHTML('beforeend', onWatchedClick());
}
