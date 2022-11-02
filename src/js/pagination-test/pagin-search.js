import ApiService from '../ApiService';
import { containerGallery, notifyARef, notifyBRef } from '../utils/refs';
import { clearMarkup } from '../header-search';
import { createMarkup } from '../utils/createMarkup';

const api = new ApiService();

export async function searchMovies(query, page = 1) {
  try {
    const data = await api.getMoviesByName(query, page);
    const result = data.results;
    if (data.results.length === 0) {
      notifyBRef.classList.add('visually-hidden');
      notifyARef.classList.remove('visually-hidden');
    } else {
      notifyARef.classList.add('visually-hidden');
      notifyBRef.classList.add('visually-hidden');
      const markup = createMarkup(result);
      clearMarkup();
      containerGallery.innerHTML = markup;
    }
  } catch (error) {
    console.error('Error with search fetch' + error);
  }
}
