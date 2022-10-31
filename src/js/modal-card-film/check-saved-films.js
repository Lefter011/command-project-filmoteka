import ApiService from '../ApiService';
import { LINE_KEY } from './add-to-queue';
import { WATCHED_KEY } from './add-to-watched';
import { films } from './random-films';
import { localStore } from '../utils/loc-storage';

const api = new ApiService();

export function checkSavedFilms(film) {
  const queueBtn = document.querySelector('button[data-modal-queue]');
  const watchedBtn = document.querySelector('button[data-modal-watched]');

  const filmId = film.id;
  const savedMovies = localStore.load(LINE_KEY);
  const isSaved = savedMovies.find(film => film.id === filmId);
  if (isSaved) {
    queueBtn.textContent = 'Remove from queue';
    queueBtn.style.height = 'auto';
    const btnHeight = queueBtn.style.height;
    watchedBtn.style.height = btnHeight;
  }
}

export function checkWatchedFilms(film) {
  const watchedBtn = document.querySelector('button[data-modal-watched]');
  const queueBtn = document.querySelector('button[data-modal-queue]');
  const filmId = film.id;
  console.log('checkWatchedFilms   filmId', filmId);
  const savedMovies = localStore.load(WATCHED_KEY);
  const isSaved = savedMovies.find(film => film.id === filmId);
  if (isSaved) {
    watchedBtn.textContent = 'Remove from watched';
    watchedBtn.style.height = 'auto';
    const btnHeight = watchedBtn.style.height;
    queueBtn.style.height = btnHeight;
  }
}

