import axios from "axios";

let page;
let query;

const BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = '169863a84bc27c731fc45c45dd4a4a7e';

async function fetchPopularMovies(page) {
  const url = new URL(`${BASE_URL}/trending/movie/week`);
  url.searchParams.append('api_key', API_KEY);
  url.searchParams.append('page', page);

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}

console.log(fetchPopularMovies(3));


async function fetchMoviesByQuery(query, page) {
  const url = new URL(`${BASE_URL}/search/movie`);
  url.searchParams.append('api_key', API_KEY);
  url.searchParams.append('query', query);
  url.searchParams.append('page', page);

  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function fetchMovieById(id) {
  const url = new URL(`${BASE_URL}/movie/${id}`);
  url.searchParams.append('api_key', API_KEY);

  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function fetchTrailerById(id) {
  const url = new URL(`${BASE_URL}/movie/${id}/videos`);
  url.searchParams.append('api_key', API_KEY);

  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function fetchGenres() {
  const url = new URL(`${BASE_URL}/genre/movie/list`);
  url.searchParams.append('api_key', API_KEY);

  const response = await fetch(url);
  const data = await response.json();
  return data.genres;
}

export {
  fetchPopularMovies,
  fetchMoviesByQuery,
  fetchMovieById,
  fetchTrailerById,
  fetchGenres,
  BASE_URL,
  API_KEY,
};