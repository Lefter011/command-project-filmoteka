import { getGenresName } from './utils/get-genres-name';
import { sliceGenres } from './utils/slice-genres';

export const queueBTN = document.querySelector('.queue-btn');
const watchedBTN = document.querySelector('.watched-btn');
const myLibraryList = document.querySelector('.mylibrary__list');
const myLibrary = document.querySelector('.mylibrary');
const messageWithoutMovies = document.querySelector('.no-list');

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

export function clearPage() {
  myLibraryList.innerHTML = '';
}

export function createMarkupWatched() {
  const watchedMovies = JSON.parse(localStorage.getItem('watched'));
  if (!watchedMovies) {
    myLibraryList.classList.add('visually-hidden');
    messageWithoutMovies.classList.remove('visually-hidden');
    myLibrary.style.height = '100vh';
    return;
  }
  if (watchedMovies) {
    myLibraryList.classList.remove('visually-hidden');
    messageWithoutMovies.classList.add('visually-hidden');
  }
  return watchedMovies
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

export function createMarkupQueue() {
  const queueMovies = JSON.parse(localStorage.getItem('queue'));
  if (!queueMovies) {
    myLibraryList.classList.add('visually-hidden');
    messageWithoutMovies.classList.remove('visually-hidden');
    myLibrary.style.height = '100vh';
    return;
  }
  if (queueMovies) {
    myLibraryList.classList.remove('visually-hidden');
    messageWithoutMovies.classList.add('visually-hidden');
  }
  if (queueMovies.length > 9) {
    cutMovies = queueMovies.slice(0, 9);
    createLibraryMarkup(cutMovies);
    return;
  }

  createLibraryMarkup(queueMovies);
}

export function createLibraryMarkup(movies) {
  return movies
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
