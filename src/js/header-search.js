import {
  containerGallery,
  searchFormRef,
  notifyARef,
  notifyBRef,
} from './utils/refs';
import { urls } from './utils/config';
import ApiService from './ApiService';
import { getGenresName } from './utils/get-genres-name';
import { sliceGenres } from './utils/slice-genres';
import { addBackToTop } from 'vanilla-back-to-top';

const api = new ApiService();

searchFormRef.addEventListener('submit', onSubmit);

export async function onSubmit(event, page) {
  event.preventDefault();
  const searchQuery = event.currentTarget.elements.searchQuery.value
    .trim()
    .toLowerCase();
  if (!searchQuery) {
    notifyARef.classList.add('visually-hidden');
    notifyBRef.classList.remove('visually-hidden');
    return;
  }
  api.query = searchQuery;
  const paginContainer = document.querySelector('.pagination-container');
  console.log('paginContainer', paginContainer);
  paginContainer.classList.add('visually-hidden');

  const data = await api.getMoviesByName(searchQuery, page);
  localStorage.setItem('query', JSON.stringify(data));

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

export function createMarkup(data) {
  const { results } = data;
  return results
    .map(({ poster_path, original_title, genre_ids, release_date, id }) => {
      const releaseYear = new Date(release_date);
      const genres = getGenresName(genre_ids);
      const slicedGenres = sliceGenres(genres);
      let posterLink = `${urls.BASE_IMAGE_URL}${poster_path}`;
      if (poster_path === null) {
        posterLink = 'https://i.postimg.cc/zG4yJ7P4/No-Image-Available.jpg';
      }
      return `<li class="card__item" data-id=${id}>
  <div class="card__img-wrap js-modal-trigger">
    <img
      src="${posterLink}"
      alt="${original_title}"
      class="card__img"
    />
  </div>
  <div class="card__text-wrap js-modal-trigger">
    <h2 class="card__name">${original_title}</h2>
    <div class="card__info">
      <p class="card__genres">${slicedGenres.join(', ')}</p>
      <p class="card__year">${releaseYear.getFullYear()}</p>
    </div>
  </div>
</li>`;
    })
    .join('');
}

export function clearMarkup() {
  containerGallery.innerHTML = '';
}

addBackToTop({
  diameter: 45,
  backgroundColor: 'transparent',
  textColor: '#e5882c',
});
