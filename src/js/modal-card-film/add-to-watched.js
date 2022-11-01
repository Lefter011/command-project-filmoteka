import { localStore } from '../utils/loc-storage';
import { checkWatchedFilms } from './check-saved-films';

export const WATCHED_KEY = `watched`;

export function onWatchedClick(evt, arg) {
  evt.preventDefault();
  const watchedBtn = document.querySelector('button[data-modal-watched]');
  const savedMovies = localStore.load(WATCHED_KEY);
  const isSaved = checkWatchedFilms(arg);
  if (isSaved) {
    const index = savedMovies.indexOf(isSaved);
    savedMovies.splice(index, 1);
    localStore.save(WATCHED_KEY, savedMovies);
    watchedBtn.textContent = 'Add to watched';
  } else {
    savedMovies.push(arg);
    localStore.save(WATCHED_KEY, savedMovies);
    watchedBtn.textContent = 'Remove from watched';
    watchedBtn.style.width = 'fit-content';
    watchedBtn.style.height = 'auto';
  }
}
