import { urls } from '../utils/config';

export function createMarkup(movies) {
  return movies
    .map(({ genre_ids, title, poster_path, release_date, id }) => {
      return `<li class="card__item" data-id=${id}>
  <div class="card__img-wrap">
    <img
      src="${urls.BASE_IMAGE_URL}${poster_path}"
      alt="${title}"
      class="card__img"
    />
  </div>
  <div class="card__text-wrap">
    <h2 class="card__name">${title}</h2>
    <div class="card__info">
      <p class="card__genres">Drama, Action<span class="card__year"></span></p>
      <p class="card__year">2022</p>
    </div>
  </div>
</li>`;
    })
    .join('');
}
