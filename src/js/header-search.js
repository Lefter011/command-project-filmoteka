import {
  containerGallery,
  searchFormRef,
  notifyARef,
  notifyBRef,
} from './utils/refs';
import { urls } from './utils/config';
import ApiService from './ApiService';
import { getGenres } from './utils/getGenres';

const api = new ApiService();

searchFormRef.addEventListener('submit', onSubmit);

async function onSubmit(event) {
  event.preventDefault();
  const searchQuery = event.currentTarget.elements.searchQuery.value
    .trim()
    .toLowerCase();
  if (!searchQuery) {
    notifyARef.classList.add('visually-hidden');
    notifyBRef.classList.remove('visually-hidden');
    return;
  }
  const data = await api.getMoviesByName(searchQuery);
  if (data.total_results === 0) {
    notifyBRef.classList.add('visually-hidden');
    notifyARef.classList.remove('visually-hidden');
  } else {
    notifyARef.classList.add('visually-hidden');
    notifyBRef.classList.add('visually-hidden');
    clearMarkup();
    const markup = createMarkup(data);
    containerGallery.insertAdjacentHTML('beforeend', markup);
  }
}

function createMarkup(data) {
  const { results } = data;
  return results
    .map(({ poster_path, original_title, genre_ids, release_date, id }) => {
      const releaseYear = release_date.substring(0, 4);
      const genresList = getGenres(genre_ids, 3);
      let posterLink = `${urls.BASE_IMAGE_URL}${poster_path}`;
      if (poster_path === null) {
        posterLink = 'https://i.postimg.cc/zG4yJ7P4/No-Image-Available.jpg';
      }
      return `<li class="card__item">
  <div class="card__img-wrap">
    <img
      src="${posterLink}"
      alt="${original_title}"
      class="card__img"
    />
  </div>
  <div class="card__text-wrap">
    <h2 class="card__name">${original_title}</h2>
    <div class="card__info">
      <p class="visually-hidden">${id}</p>
      <p class="card__genres">${genresList}</p>
      <p class="card__year">${releaseYear}</p>
    </div>
  </div>
</li>`;
    })
    .join('');
}

function clearMarkup() {
  containerGallery.innerHTML = '';
}
