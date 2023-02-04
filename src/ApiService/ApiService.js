import axios from 'axios';

const API_KEY = 'e4c439da3c1d90110fb4595b6236c9fe';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrendingMovie = async () => {
  const { data } = await axios('trending/movie/day', {
    params: {
      api_key: API_KEY,
    },
  });
  return data.results;
};

export const getMoviedetails = async id => {
  const { data } = await axios(`/movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};

export const searchMovie = async query => {
  const { data } = await axios('/search/movie', {
    params: {
      api_key: API_KEY,
      query,
    },
  });
  return data.results;
};
