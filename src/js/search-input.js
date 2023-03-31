import debounce from 'lodash.debounce';
import axios from 'axios';

const API_KEY = '169863a84bc27c731fc45c45dd4a4a7e';

const form = document.querySelector('.header-form');
const input = document.querySelector('.header-form-input');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const name = input.value;
  if (name) {
    getMoviesByName(name);
    console.log(name);
  }
}

async function getMoviesByName(name) {
  try {
    const params = {
      api_key: API_KEY,
      query: name,
      page: 1,
      language: 'en-US',
    };
    const response = await axios.get(
      'https://api.themoviedb.org/3/search/movie',
      { params }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
