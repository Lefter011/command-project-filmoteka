import { localStore } from '../utils/loc-storage';
import { checkWatchedFilms } from './check-saved-films';

export const WATCHED_KEY = `watched`;
const myLibrary = document.querySelector('.mylibrary');

export function onWatchedClick(evt, arg) {
  evt.preventDefault();
  const watchedBtn = document.querySelector('button[data-modal-watched]');
  const savedMovies = localStore.load(WATCHED_KEY);
  const isSaved = checkWatchedFilms(arg);

  if (isSaved) {
    const index = savedMovies.findIndex(movie => movie.id === isSaved.id);
    const deleted = savedMovies.splice(index, 1);
    console.log('onWatchedClick   deleted', deleted);
    localStore.save(WATCHED_KEY, savedMovies);
    watchedBtn.textContent = 'Add to watched';
    if (savedMovies.length === 0 & !myLibrary) {
      myLibrary.style.height = '100vh';
    }
  } else {
    savedMovies.unshift(arg);
    localStore.save(WATCHED_KEY, savedMovies);
    watchedBtn.textContent = 'Remove from watched';
    watchedBtn.style.width = 'fit-content';
  }
}
