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
      const genres = getGenresName(genre_ids);
      const slicedGenres = sliceGenres(genres);
      let posterLink = `${urls.BASE_IMAGE_URL}${poster_path}`;
      if (poster_path === null) {
        posterLink = 'https://i.postimg.cc/zG4yJ7P4/No-Image-Available.jpg';
      }
      return `<li class="card__item" data-id=${id}>
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
      <p class="card__genres">${slicedGenres.join(', ')}</p>
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

addBackToTop({
  diameter: 45,
  backgroundColor: 'transparent',
  innerHtml:
    '<symbol id="icon-circle-up" viewBox="0 0 32 32"><path d="M0 16c0 8.837 7.163 16 16 16s16-7.163 16-16-7.163-16-16-16-16 7.163-16 16zM29 16c0 7.18-5.82 13-13 13s-13-5.82-13-13 5.82-13 13-13 13 5.82 13 13z"></path><path d="M22.086 20.914l2.829-2.829-8.914-8.914-8.914 8.914 2.828 2.828 6.086-6.086z"></path></symbol>',
  textColor: '#e5882c',
});
