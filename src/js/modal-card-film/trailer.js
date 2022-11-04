import ApiService from "../ApiService";
import axios from "axios";

const BaseYouTubeURL = 'https://www.youtube.com/embed/';


export function createTrailerBtnMurkup(film) {
    
    if (film.results.length === 0 || !film.results) {
        return
    }
    const { key } = film.results[0];
    const markup = `<button type="button" class="modal__trailer visually-hidden modal__btn" data-modal-trailer >
    <a class="trailer-link" target="_blank" href="${BaseYouTubeURL}${key}">Trailer</a>
</button>`;
    return markup;

}

export function addTrailerMarkup(markup) {
    if (!markup) {
        return
    }
    const modalBtnWrapperRef = document.querySelector('.modal__buttons');
    modalBtnWrapperRef.insertAdjacentHTML('beforeend', markup);
    const trailerBtnRef = document.querySelector('.modal__trailer');
    trailerBtnRef.classList.remove('visually-hidden')
}