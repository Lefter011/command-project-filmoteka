import { localStore } from '../utils/loc-storage';
import { switchBtnText } from './add-to-watched';

export const LINE_KEY = `queue`;

export function onQueueClick(currentMovie) {
  const savedMovies = localStore.load(LINE_KEY);
  const isSaved = savedMovies.find(film => film.id === currentMovie.id);
  if (isSaved) {
    const index = savedMovies.indexOf(isSaved);
    savedMovies.splice(index, 1);
    localStore.save(LINE_KEY, savedMovies);
    switchBtnText(queueBtn);
    const btnHeight = queueBtn.style.height;
    watchedBtn.style.height = btnHeight;
  } else {
    savedMovies.push(currentMovie);
    localStore.save(LINE_KEY, savedMovies);
    switchBtnText(queueBtn);
  }
}
