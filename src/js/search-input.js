import debounce from 'lodash.debounce';
import axios from 'axios';
import { getMoviesByName } from './api-fetch';
import { createMarkupOneCard } from './markup-cards';

const API_KEY = '169863a84bc27c731fc45c45dd4a4a7e';

const form = document.querySelector('.header-form');
const input = document.querySelector('.header-form-input');
const filmGallery = document.querySelector('.js-film-gallery');
const searchError = document.querySelector('.search-error');
form.addEventListener('submit', onFormSubmit);

async function onFormSubmit(event) {
  event.preventDefault();
  const name = input.value.trim();
  input.value = name;

  try {
    if (name) {
      searchError.style.display = 'none';
      const response = await getMoviesByName(name);
      console.log(response.results);
      if (response.results.length < 1) {
        return (searchError.style.display = 'flex');
      }
      filmGallery.innerHTML = createMarkupOneCard(response.results);
    }
  } catch (error) {
    console.log(error.message);
  }
}

// async function getMoviesByName(name) {
//   try {
//     const params = {
//       api_key: API_KEY,
//       query: name,
//       page: 1,
//       language: 'en-US',
//     };
//     const response = await axios.get(
//       'https://api.themoviedb.org/3/search/movie',
//       { params }
//     );
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// }
