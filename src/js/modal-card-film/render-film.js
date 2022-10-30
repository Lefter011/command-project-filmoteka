import { refs } from './modal-refs';
import { films } from './random-films';

const BASE_PICTURE_URL = 'https://image.tmdb.org/t/p/';
const desktopSize = 'original';
const mobileSize = 'w342';
const tabletSize = 'w780';
let markup = null;

function renderFilmCard(obj) {
  const {
    id,
    title,
    original_title,
    overview,
    poster_path,
    genre_ids,
    popularity,
    vote_average,
    vote_count,
  } = obj;

  markup = `<div class="modal__content">
  <div class="img-thumb">
    <picture class="main-modal-img">
      <source
        srcset="${BASE_PICTURE_URL}${desktopSize}${poster_path}"
        media="(min-width: 1024px)"
      />
      <source
        srcset="
          ${BASE_PICTURE_URL}${tabletSize}${poster_path}  1x,
          ${BASE_PICTURE_URL}${desktopSize}${poster_path} 2x
        "
        media="(min-width: 768px)"
      />
      <source
        srcset="
          ${BASE_PICTURE_URL}${mobileSize}${poster_path} 1x,
          ${BASE_PICTURE_URL}${tabletSize}${poster_path} 2x
        "
        media="(min-width: 320px)"
      />

      <img
        src="${BASE_PICTURE_URL}${mobileSize}${poster_path}"
        alt="${title}"
        class="main-modal-img"
      />
    </picture>
  </div>
  <div class="modal__info-container">
    <h2 class="modal__title">${title}</h2>
    <table class="modal__stats">
      <tr class="stats__row">
        <td class="stats__name">Vote</td>
        <td class="stats__value">
          <span class="accent-num">${vote_average}</span> /
          <span class="grey-num">${vote_count}</span>
        </td>
      </tr>
      <tr class="stats__row">
        <td class="stats__name">Popularity</td>
        <td class="stats__value">${popularity}</td>
      </tr>
      <tr class="stats__row">
        <td class="stats__name">Original Title</td>
        <td class="stats__value">${original_title}</td>
      </tr>
      <tr class="stats__row">
        <td class="stats__name">Genre</td>
        <td class="stats__value">????</td>
      </tr>
    </table>

    <section class="modal__about">
      <h3 class="about__title">About</h3>
      <p class="about__text">${overview}</p>
    </section>
    <div class="modal__buttons">
      <button
        type="button"
        class="modal__btn modal__btn--orange"
        data-modal-watched
      >
        add to watched
      </button>
      <button
        type="button"
        class="modal__btn modal__btn--light"
        data-modal-queue
      >
        add to queue
      </button>
    </div>
  </div>
</div>`;

  addMarkupToCard(markup);
}

function addMarkupToCard(markup) {
  refs.containerForInfo.innerHTML = markup;
}

renderFilmCard(films[1]);
