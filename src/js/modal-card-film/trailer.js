import ApiService from "../ApiService";
import * as basicLightbox from 'basiclightbox'
import 'basiclightbox/dist/basicLightbox.min.css';
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

// export function creatTrailerLink() {
    
//     const trailerLink = document.querySelector('.trailer-link')

//     const trailer = basicLightbox.create(`
//     <iframe width="320" height="240" src=${trailerLink.href}frameborder="0" allowfullscreen class="trailer_video"></iframe>
//     `);

//     setTimeout(() => {
//         const trailerBtn = document.querySelector('.modal__trailer');
//         trailerBtn.addEventListener('click', watchTrailer);
//     }, 300);

//     function watchTrailer() {
//         trailer.show();
//     }
// }

// export function openTrailer(event) {
//     console.log(event.target);

//     event.preventDefault();
//     if (event.target.nodeName !== 'BUTTON') {
//         return;
//     }
//     const trailerLink = document.querySelector('.trailer-link')
//     console.log(trailerLink.href);
//     const trailer = basicLightbox.create(`
//     <iframe width="320" height="240" src=${trailerLink.href}frameborder="0" allowfullscreen class="trailer_video"></iframe>
//     `)

//     trailer.show()
    
//     if (trailer.show()) {
//        trailerBtn.addEventListener('keydown', event => {
//         if (event.code === 'Escape') {
//             instance.close()
//         }
//     }) 
//     } 
// }
