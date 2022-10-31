import axios from 'axios';
import { parse } from 'handlebars';
import { API_KEY } from './utils/config';
import { urls } from './utils/config';
import { getGenresName } from './utils/getGenresName';

const queueBTN = document.querySelector('.queue-btn');
const watchedBTN = document.querySelector('.watched-btn');
const myLibraryList = document.querySelector('.mylibrary__list');
const myLibrary = document.querySelector('.mylibrary');

function onLoadPage() {
  clearPage();
  queueBTN.classList.add('inactive-btn');
  queueBTN.classList.remove('active-btn');
  watchedBTN.classList.add('active-btn');
  watchedBTN.classList.remove('inactive-btn');
  myLibrary.style.height = 'auto';
  myLibraryList.insertAdjacentHTML('beforeend', createMarkupWatched());
}

function onWatchedClick() {
  clearPage();
  queueBTN.classList.add('inactive-btn');
  queueBTN.classList.remove('active-btn');
  watchedBTN.classList.add('active-btn');
  watchedBTN.classList.remove('inactive-btn');
  myLibrary.style.height = 'auto';
  myLibraryList.insertAdjacentHTML('beforeend', createMarkupWatched());
}

function onQueueClick() {
  clearPage();
  queueBTN.classList.add('active-btn');
  queueBTN.classList.remove('inactive-btn');
  watchedBTN.classList.add('inactive-btn');
  watchedBTN.classList.remove('active-btn');
  myLibrary.style.height = 'auto';
  myLibraryList.insertAdjacentHTML('beforeend', createMarkupQueue());
}

watchedBTN.addEventListener('click', onWatchedClick);
queueBTN.addEventListener('click', onQueueClick);

onLoadPage();

function clearPage() {
  myLibraryList.innerHTML = '';
}

function createMarkupWatched() {
  const watchedMovies = JSON.parse(localStorage.getItem('watched'));
  if (!watchedMovies) {
    myLibrary.style.height = '100vh';
    myLibraryList.textContent = '';
    myLibraryList.textContent =
      "Sorry you don't have any movies added. Create a new list now";
    return;
  }
  return watchedMovies
    .map(
      ({
        poster_path,
        original_title,
        genre_ids,
        release_date,
        vote_average,
        id,
      }) => {
        const releaseYear = release_date.substring(0, 4);
        const vote = Number(vote_average).toFixed(1);
        const genres = getGenresName(genre_ids);
        const slicedGenres = sliseGenres(genres);
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

function createMarkupQueue() {
  const queueMovies = JSON.parse(localStorage.getItem('queue'));
  if (!queueMovies) {
    myLibrary.style.height = '100vh';
    myLibraryList.textContent = '';
    myLibraryList.textContent =
      "Sorry you don't have any added movies. Create a new list now";
    return;
  }

  return queueMovies
    .map(
      ({
        poster_path,
        original_title,
        genre_ids,
        release_date,
        vote_average,
      }) => {
        const releaseYear = release_date.substring(0, 4);
        const vote = Number(vote_average).toFixed(1);
        const genres = getGenresName(genre_ids);
        const slicedGenres = sliseGenres(genres);
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
                <p class="mylibrary__item-genres">${slicedGenres}</p>
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
export function sliseGenres(genres) {
  if (genres.length < 3) {
    return genres;
  } else {
    return [...genres.slice(0, 2), 'Other'];
  }
}
