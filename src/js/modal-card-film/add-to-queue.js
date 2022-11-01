import { localStore } from '../utils/loc-storage';
import { checkSavedFilms } from './check-saved-films';

export const LINE_KEY = `queue`;

export function onQueueClick(evt, arg) {
  evt.preventDefault();
  const queueBtn = document.querySelector('button[data-modal-queue]');
  const savedMovies = localStore.load(LINE_KEY);
  const isSaved = checkSavedFilms(arg);
  if (isSaved) {
    const index = savedMovies.indexOf(isSaved);
    savedMovies.splice(index, 1);
    localStore.save(LINE_KEY, savedMovies);
    queueBtn.textContent = 'Add to queue';
  } else {
    savedMovies.push(arg);
    localStore.save(LINE_KEY, savedMovies);
    queueBtn.textContent = 'Remove from queue';
    queueBtn.style.width = 'fit-content';
    queueBtn.style.height = 'auto';
  }
}
