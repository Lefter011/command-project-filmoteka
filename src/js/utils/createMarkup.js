import { urls } from '../utils/config';
import { getGenresName } from './get-genres-name';
import { sliceGenres } from './slice-genres';

export function createMarkup(movies) {
  return movies
    .map(({ id, genre_ids, title, poster_path, release_date }) => {
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
      alt="${title}"
      class="card__img"
    />
  </div>
  <div class="card__text-wrap js-modal-trigger">
    <h2 class="card__name">${title}</h2>
    <div class="card__info">
      <p class="card__genres">${slicedGenres.join(', ')}</span></p>
      <p class="card__year">${releaseYear.getFullYear()}</p>
    </div>
  </div>
</li>`;
    })
    .join('');
}
