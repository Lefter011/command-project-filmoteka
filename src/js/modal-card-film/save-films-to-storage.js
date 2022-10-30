import ApiService from '../ApiService';
import { localStore } from '../utils/loc-storage';

const api = new ApiService();
async function getFilms() {
  const res = await api.fetchTrendingMovies();
  localStore.save('trendingFilms', res.data.results);
}

getFilms();
