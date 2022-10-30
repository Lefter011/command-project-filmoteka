import ApiService from './ApiService';
import { containerGallery } from './utils/refs';
import { createMarkup } from './utils/createMarkup';
// import { urls } from './utils/config';

const apiMovie = new ApiService();

async function homePage() {
  const res = await apiMovie.fetchTrendingMovies();
  const movieObj = res.data.results;
  localStorage.setItem('trendingFilms', JSON.stringify(movieObj));
  console.log(res);

  const markup = createMarkup(movieObj);
  console.log(markup);
  containerGallery.insertAdjacentHTML('beforeend', markup);
}

document.addEventListener('DOMContentLoaded', homePage);
