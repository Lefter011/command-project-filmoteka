import { containerGallery, searchFormRef } from './utils/refs';
import ApiService from './ApiService';

const api = new ApiService();

searchFormRef.addEventListener('submit', onSubmit);

async function onSubmit(event) {
  event.preventDefault();
  const searchQuery = event.currentTarget.elements.searchQuery.value
    .trim()
    .toLowerCase();
  if (!searchQuery) {
    alert('Enter a search query!');
    return;
  }
  const data = await api.getMoviesByName(searchQuery);
  if (data.total_results === 0) {
    alert(
      'Search result is unsuccessful. Enter the correct movie name and try again!'
    );
  }
  clearMarkup();
  const markup = createMarkup(data);
  containerGallery.insertAdjacentHTML('beforeend', markup);
}

function createMarkup(data) {
  const { results } = data;
  return results
    .map(({ poster_path, original_title, genre_ids, release_date }) => {
      const releaseYear = release_date.substring(0, 4);
      const BASE_PICTURE_URL = 'https://image.tmdb.org/t/p/original';
      let posterLink = `${BASE_PICTURE_URL}${poster_path}`;
      if (poster_path === null) {
        posterLink = 'https://i.postimg.cc/zG4yJ7P4/No-Image-Available.jpg';
      }
      return `<li class="hero__movie-item">
<div class="gallery__section">
    <ul class="gallery__card">
        <li class="gallery-list list">
            <div class="gallary__titular">
                <img src="${posterLink}" width="395" alt="${original_title}" class="gallery__img">
        </li>
        </div>
        <div class="gallary__info">
            <p class="card__name">${original_title}</p>
            <p class="card__info">${genre_ids} , ${releaseYear}</p>
        </div>
    </ul>
</div>
</li>`;
    })
    .join('');
}

function clearMarkup() {
  containerGallery.innerHTML = '';
}
