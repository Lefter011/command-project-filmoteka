import axios from "axios";
import { parse } from "handlebars";
import { API_KEY } from "./utils/config"
import { urls } from "./utils/config";



const queueBTN = document.querySelector('.queue-btn');
const watchedBTN = document.querySelector('.watched-btn');
const myLibraryList = document.querySelector('.mylibrary__list')
const myLibrary = document.querySelector('.mylibrary')


function onLoadPage() {
    clearPage();
    queueBTN.classList.add('inactive-btn');
    queueBTN.classList.remove('active-btn');
    watchedBTN.classList.add('active-btn');
    watchedBTN.classList.remove('inactive-btn');
    myLibraryList.insertAdjacentHTML("beforeend", createMarkupWatched())


}

onLoadPage();

function clearPage() {
    myLibraryList.innerHTML = '';
    
    


}


function createMarkupWatched() {
    const watchedMovies = JSON.parse(localStorage.getItem("watched"));
    if (watchedMovies.length === 20) {
        myLibrary.style.height = '100vh';
        myLibraryList.textContent = "Sorry you don't have any movies added. Create a new list now";
        return
    }
  return watchedMovies
    .map(({ poster_path, original_title, genre_ids, release_date, vote_average }) => {
        const releaseYear = release_date.substring(0, 4);
        const vote = Number(vote_average).toFixed(1);
      const BASE_PICTURE_URL = 'https://image.tmdb.org/t/p/original';
      let posterLink = `${BASE_PICTURE_URL}${poster_path}`;
      if (poster_path === null) {
        posterLink = 'https://i.postimg.cc/zG4yJ7P4/No-Image-Available.jpg';
      }
      return`<li class="mylibrary__item">
            <div class="mylibrary__item-wrapper">
                <img
                class="mylibrary__item-img"
                src="${posterLink}"
                alt="${original_title}"
            />
            <h2 class="mylibrary__item-title">${original_title}</h2>
            <div class="mylibrary__item-text-wrapper">
                <p class="mylibrary__item-genres">${genre_ids}</p>
                <p class="mylibrary__item-text-separator">|</p>
                <p class="mylibrary__item-release-arye">${releaseYear}</p>
                <div class="reting-wrapper">
                    <p class="mylibrary__item-reting">${vote}</p>
                </div>
            </div>
            </div>
        </li>`;
    })
    .join('');
}

function createMarkupQueue() {
    const WatchedMovies = JSON.parse(localStorage.getItem("queue"));
    
  return WatchedMovies
    .map(({ poster_path, original_title, genre_ids, release_date, vote_average }) => {
        const releaseYear = release_date.substring(0, 4);
        const vote = Number(vote_average).toFixed(1);
      const BASE_PICTURE_URL = 'https://image.tmdb.org/t/p/original';
      let posterLink = `${BASE_PICTURE_URL}${poster_path}`;
      if (poster_path === null) {
        posterLink = 'https://i.postimg.cc/zG4yJ7P4/No-Image-Available.jpg';
      }
      return`<li class="mylibrary__item">
            <div class="mylibrary__item-wrapper">
                <img
                class="mylibrary__item-img"
                src="${posterLink}"
                alt="${original_title}"
            />
            <h2 class="mylibrary__item-title">${original_title}</h2>
            <div class="mylibrary__item-text-wrapper">
                <p class="mylibrary__item-genres">${genre_ids}</p>
                <p class="mylibrary__item-text-separator">|</p>
                <p class="mylibrary__item-release-arye">${releaseYear}</p>
                <div class="reting-wrapper">
                    <p class="mylibrary__item-reting">${vote}</p>
                </div>
            </div>
            </div>
        </li>`;
    })
    .join('');
}








