import ApiService from '../ApiService';
import { LINE_KEY } from './add-to-queue';
import { WATCHED_KEY } from './add-to-watched';
import { films } from './random-films';
import { localStore } from '../utils/loc-storage';
import { switchBtnText } from './add-to-watched';

const api = new ApiService();

export function checkSavedFilms(movie) {
  const filmId = movie.id;
  const savedMovies = localStore.load(LINE_KEY);
  const isSaved = savedMovies.find(film => film.id === filmId);
  return isSaved;
}

export function checkWatchedFilms(movie) {
  const filmId = movie.id;
  const savedMovies = localStore.load(WATCHED_KEY);
  const isSaved = savedMovies.find(film => film.id === filmId);
  return isSaved;
}
