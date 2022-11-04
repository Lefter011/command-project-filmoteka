import { refs } from './modal-refs';
import { onWatchedClick, WATCHED_KEY } from './add-to-watched';
import { onQueueClick, LINE_KEY } from './add-to-queue';
import { localStore } from '../utils/loc-storage';
import { checkSavedFilms, checkWatchedFilms } from './check-saved-films';
import ApiService from '../ApiService';
import { createModalCardMarkup, addMarkupToCard } from './render-film';
import { sliceGenres } from '../utils/slice-genres';
import { createTrailerBtnMurkup } from './trailer';
import { addTrailerMarkup } from './trailer';
import { creatTrailerLink } from './trailer';

if (refs.home) {
  refs.home.addEventListener('click', onFilmCardClick);
}

refs.closeBtn.addEventListener('click', onCloseBtnClick);

const api = new ApiService();

export async function onFilmCardClick(evt) {
  evt.preventDefault();
  const targetClick = 'js-modal-trigger';
  if (!evt.target.parentNode.classList.contains(targetClick)) {
    return;
  }
  refs.backdrop.classList.remove('is-hidden');
  refs.modal.classList.add('is-open');
  refs.body.classList.add('modal-shown');
  refs.body.addEventListener('click', onBackdropClick);
  window.addEventListener('keydown', onEscClick);
  const parentOne = evt.target.parentNode;
  const filmId = parentOne.parentNode.dataset.id;
  const movie = await api
    .fetchMoviesByID(filmId)
    .then(res => {
      return res;
    })
    .catch(console.error());
  const markupDone = createModalCardMarkup(movie);
  addMarkupToCard(markupDone);
  saveKeysToStorage();
  const fetchTrailer = await api
    .fetchTrailer(filmId)
    .then(res => {
      return res;
    })
    .catch(console.error());
  const trailerBtnMurkup = createTrailerBtnMurkup(fetchTrailer);
  addTrailerMarkup(trailerBtnMurkup);
  const queueBtn = document.querySelector('button[data-modal-queue]');
  const watchedBtn = document.querySelector('button[data-modal-watched]');
  const trailerBtn = document.querySelector('button[data-modal-watched]');
  const savedQueue = checkSavedFilms(movie);
  const savedWatched = checkWatchedFilms(movie);

  // trailerBtn.addEventListener('click', openTrailer)

  if (savedQueue) {
    queueBtn.textContent = 'Remove from queue';
    queueBtn.style.width = 'fit-content';
  }
  if (savedWatched) {
    watchedBtn.textContent = 'Remove from watched';
    watchedBtn.style.width = 'fit-content';
  }

  queueBtn.addEventListener('click', evt => onQueueClick(evt, movie));
  watchedBtn.addEventListener('click', evt => onWatchedClick(evt, movie));
}

export function onCloseBtnClick() {
  refs.backdrop.classList.add('is-hidden');
  refs.modal.classList.remove('is-open');
  refs.body.classList.remove('modal-shown');
  refs.body.removeEventListener('click', onBackdropClick);
  window.removeEventListener('keydown', onEscClick);
  refs.containerForInfo.innerHTML = '';
  const library = document.querySelector('.mylibrary__list');
  if (library) {
    const queuePage = document.querySelector('.queue-btn');
    const queuePageisActive = queuePage.classList.contains('active-btn');
    const watchedPage = document.querySelector('.watched-btn');
    const watchedPageisActive = watchedPage.classList.contains('active-btn');
    if (queuePageisActive) {
      const newMoviesList = libraryReloadWatched(LINE_KEY);
      library.innerHTML = newMoviesList;
    } else {
      const newMoviesList = libraryReloadWatched(WATCHED_KEY);
      library.innerHTML = newMoviesList;
    }
  }
}

export function onBackdropClick(evt) {
  const target = evt.target.className;
  if (target === 'backdrop') {
    onCloseBtnClick();
  }
}

export function onEscClick(evt) {
  if (evt.code === 'Escape') {
    onCloseBtnClick();
  }
}

export function saveKeysToStorage() {
  let savedWatched = localStore.load(WATCHED_KEY);
  savedWatched = savedWatched ? savedWatched : [];
  localStore.save(WATCHED_KEY, savedWatched);

  let savedLine = localStore.load(LINE_KEY);
  savedLine = savedLine ? savedLine : [];
  localStore.save(LINE_KEY, savedLine);
}

function libraryReloadWatched(key) {
  const savedMovies = localStore.load(key);
  const library = document.querySelector('.mylibrary__list');
  const messageWithoutMovies = document.querySelector('.no-list');
  if (!savedMovies || savedMovies.length === 0) {
    library.classList.add('visually-hidden');
    messageWithoutMovies.classList.remove('visually-hidden');
    library.style.height = '100vh';
    return;
  }
  if (savedMovies) {
    library.classList.remove('visually-hidden');
    messageWithoutMovies.classList.add('visually-hidden');
  }
  return savedMovies
    .map(
      ({
        poster_path,
        original_title,
        genres,
        release_date,
        vote_average,
        id,
      }) => {
        const releaseYear = release_date.substring(0, 4);
        const vote = Number(vote_average).toFixed(1);
        // const genres = getGenresName(genre_ids);
        const genresArr = [];
        genres.map(genre => genresArr.push(genre.name));
        const slicedGenres = sliceGenres(genresArr);
        const BASE_PICTURE_URL = 'https://image.tmdb.org/t/p/original';
        let posterLink = `${BASE_PICTURE_URL}${poster_path}`;
        if (poster_path === null) {
          posterLink = 'https://i.postimg.cc/zG4yJ7P4/No-Image-Available.jpg';
        }
        return `<li class="mylibrary__item" data-id=${id}>
            <div class="mylibrary__item-wrapper js-modal-trigger">
                <img
                class="mylibrary__item-img"
                src="${posterLink}"
                alt="${original_title}"
                loading=lazy
            />
            <h2 class="mylibrary__item-title js-modal-trigger">${original_title}</h2>
            <div class="mylibrary__item-text-wrapper js-modal-trigger">
                <p class="mylibrary__item-genres">${slicedGenres.join(', ')}</p>
                <p class="mylibrary__item-text-separator">|</p>
                <p class="mylibrary__item-release-arye">${releaseYear}</p>
                <div class="reting-wrapper">
                    <p class="mylibrary__item-reting">${vote}</p>
                </div>
            </div>
            </div>
        </li>`;
      }
    )
    .join('');
}
