import ApiService from './ApiService';
import { containerGallery } from './utils/refs';
import { createMarkup } from './utils/createMarkup';
import { currentPage } from './pagination/pagination';

const apiMovie = new ApiService();

export async function homePage() {
  const res = await apiMovie.fetchTrendingMovies();
  const movieObj = res.data.results;
  localStorage.setItem('trendingFilms', JSON.stringify(movieObj));

  const markup = createMarkup(movieObj);
  containerGallery.insertAdjacentHTML('beforeend', markup);
}

document.addEventListener('DOMContentLoaded', homePage);
