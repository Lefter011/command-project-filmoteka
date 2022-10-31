import { localStore } from '../utils/loc-storage';
import { films } from './random-films';

export const WATCHED_KEY = `watched`;

export function onWatchedClick(currentMovie) {
  const savedMovies = localStore.load(WATCHED_KEY);
  const isSaved = savedMovies.find(film => film.id === currentMovie.id);
  if (isSaved) {
    const index = savedMovies.indexOf(isSaved);
    savedMovies.splice(index, 1);
    localStore.save(WATCHED_KEY, savedMovies);
    switchBtnText(watchedBtn);
    const btnHeight = watchedBtn.style.height;
    queueBtn.style.height = btnHeight;
  } else {
    savedMovies.push(currentMovie);
    localStore.save(WATCHED_KEY, savedMovies);
    switchBtnText(watchedBtn);
  }
}

export function switchBtnText(btn) {
  btn.textContent = 'Add to watched' ? 'Remove from watched' : 'Add to watched';
  btn.textContent = 'Add to queue' ? 'Remove from queue' : 'Add to queue';
  btn.style.height = 'auto';
}
