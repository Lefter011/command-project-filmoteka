import ApiService from '../ApiService';
import { LINE_KEY } from './add-to-queue';
import { WATCHED_KEY } from './add-to-watched';
import { films } from './random-films';
import { localStore } from '../utils/loc-storage';
import {
  onFilmCardClick,
  onCloseBtnClick,
  saveKeysToStorage,
  addBtnsListeners,
  onEscClick,
  onBackdropClick,
} from './modal-open-close';
import { refs } from './modal-refs';
import { checkSavedFilms, checkWatchedFilms } from './check-saved-films';
import { markup, addMarkupToCard } from './render-film';

refs.library.addEventListener('click', onFilmCardClick);