import { localStore } from '../utils/loc-storage';

export const LINE_KEY = `queue`;

export function onQueueClick(currentMovie) {
  const savedMovies = localStore.load(LINE_KEY);
  const isSaved = savedMovies.find(film => film.id === currentMovie.id);
  if (isSaved) {
    const index = savedMovies.indexOf(isSaved);
    savedMovies.splice(index, 1);
    localStore.save(LINE_KEY, savedMovies);
  } else {
    savedMovies.push(currentMovie);
    localStore.save(LINE_KEY, savedMovies);
  }
}
