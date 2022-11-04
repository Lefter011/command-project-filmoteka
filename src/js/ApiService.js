const axios = require('axios').default;

import { urls, API_KEY } from './utils/config';

export default class ApiService {
  #moviesByNameSearchParams = {
    params: {
      api_key: API_KEY,
      query: '',
      page: 1,
      include_adult: false,
    },
  };

  #genresSearchParams = {
    params: {
      api_key: API_KEY,
    },
  };

  #getMovieDetailsSearchParams = {
    params: {
      api_key: API_KEY,
    },
  };

  get query() {
    return this.#moviesByNameSearchParams.params.query;
  }
  set query(newQuery) {
    this.#moviesByNameSearchParams.params.query = newQuery;
  }

  async fetchTrailer(id) {
    const url = `${urls.BASE_URL}${urls.GET_MOVIE_DETAILS_PATH_URL}${id}/videos?api_key=${API_KEY}`
    try {
      const {data} = await axios.get(url)
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async fetchGenres() {
    const url = urls.BASE_URL + urls.GENRES_PATH_URL;
    try {
      const response = await axios.get(url, this.#genresSearchParams),
        genres = response.data.genres;
      return genres;
    } catch (error) {
      console.error(error);
    }
  }

  async fetchTrendingMovies(page = 1) {
    const url = urls.BASE_URL + urls.TRENDINGS_PATH_URL,
      popularMoviesSearchParams = { params: { api_key: API_KEY, page: page } };
    try {
      const response = await axios.get(url, popularMoviesSearchParams);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  async fetchMoviesByName() {
    const url = urls.BASE_URL + urls.SEARCH_PATH_URL;
    try {
      const response = await axios.get(url, this.#moviesByNameSearchParams);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  async getMoviesByName(query, page = 1) {
    this.#moviesByNameSearchParams.params.query = query;
    this.#moviesByNameSearchParams.params.page = page;
    const url = urls.BASE_URL + urls.SEARCH_PATH_URL;
    const response = await axios.get(url, this.#moviesByNameSearchParams);
    return response.data;
  }

  async fetchMoviesByID(id) {
    const url = urls.BASE_URL + urls.GET_MOVIE_DETAILS_PATH_URL + id;
    try {
      const response = await axios.get(url, this.#getMovieDetailsSearchParams);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  catch(error) {
    console.error(error);
  }
}
