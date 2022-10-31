import { refs } from './modal-refs';
import { films } from './random-films';
const Handlebars = require('handlebars');

const BASE_PICTURE_URL = 'https://image.tmdb.org/t/p/';
const desktopSize = 'original';
const mobileSize = 'w342';
const tabletSize = 'w780';


const markup = Handlebars.compile(`<div class="modal__content">
  <div class="img-thumb">
  {{#if poster_path}}
    <picture class="main-modal-img">
      <source
        srcset="${BASE_PICTURE_URL}${desktopSize}{{poster_path}}"
        media="(min-width: 1024px)"
      />
      <source
        srcset="
          ${BASE_PICTURE_URL}${tabletSize}{{poster_path}}  1x,
          ${BASE_PICTURE_URL}${desktopSize}{{poster_path}} 2x
        "
        media="(min-width: 768px)"
      />
      <source
        srcset="
          ${BASE_PICTURE_URL}${mobileSize}{{poster_path}} 1x,
          ${BASE_PICTURE_URL}${tabletSize}{{poster_path}} 2x
        "
        media="(min-width: 320px)"
      />

      <img
        src="${BASE_PICTURE_URL}${mobileSize}{{poster_path}}"
        alt="{{title}}"
        class="main-modal-img"
      />
    </picture>
    {{else}}
      <img
      src='https://cdn.pixabay.com/photo/2014/03/25/16/27/movie-297135_960_720.png'
          alt="{{title}}"
          class="main-modal-img"
        />
    {{/if}}
  </div>
  <div class="modal__info-container">
    <h2 class="modal__title">{{title}}</h2>
    <table class="modal__stats">
      <tr class="stats__row">
        <td class="stats__name">Vote</td>
        <td class="stats__value">
          <span class="accent-num">{{vote_average}}</span> /
          <span class="grey-num">{{vote_count}}</span>
        </td>
      </tr>
      <tr class="stats__row">
        <td class="stats__name">Popularity</td>
        <td class="stats__value">{{popularity}}</td>
      </tr>
      <tr class="stats__row">
      {{#if original_title}}
        <td class="stats__name">Original Title</td>
        <td class="stats__value">{{original_title}}</td>
        {{else}}
        <td class="stats__name">Title</td>
        <td class="stats__value">{{title}}</td>
        {{/if}}
      </tr>
      <tr class="stats__row">
      {{#if genre_ids}}
        <td class="stats__name">Genre</td>
        <td class="stats__value">{{genre_ids}}</td>
      {{/if}}
      </tr>
    </table>

    <section class="modal__about">
      <h3 class="about__title">About</h3>
      <p class="about__text">{{overview}}</p>
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
</div>`);

function addMarkupToCard(markup) {
  refs.containerForInfo.innerHTML = markup;
}

addMarkupToCard(markup(films[9]));
