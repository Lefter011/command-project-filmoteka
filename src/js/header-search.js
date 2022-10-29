import { containerGallery, searchFormRef } from './utils/refs';
import ApiService from './ApiService';

const api = new ApiService();

searchFormRef.addEventListener('submit', onSubmit);

async function onSubmit(event) {
  event.preventDefault();
  const searchQuery = event.currentTarget.elements.searchQuery.value
    .trim()
    .toLowerCase();
  if (!searchQuery) {
    alert('Enter a search query!');
    return;
  }
  const data = await api.getMoviesByName(searchQuery);
  if (data.total_results === 0) {
    alert(
      'Search result is unsuccessful. Enter the correct movie name and try again!'
    );
  }
  const markup = createMarkup(data);
  containerGallery.insertAdjacentHTML('beforeend', markup);
}
