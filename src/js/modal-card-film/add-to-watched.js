import { localStore } from '../utils/loc-storage';

export const WATCHED_KEY = `watched`;

export function onWatchedClick(currentMovie) {
  const savedMovies = localStore.load(WATCHED_KEY);
  const isSaved = savedMovies.find(film => film.id === currentMovie.id);
  if (isSaved) {
    const index = savedMovies.indexOf(isSaved);
    savedMovies.splice(index, 1);
    localStore.save(WATCHED_KEY, savedMovies);
  } else {
    savedMovies.push(currentMovie);
    localStore.save(WATCHED_KEY, savedMovies);
  }
}

