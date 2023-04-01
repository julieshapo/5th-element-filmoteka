import debounce from 'lodash.debounce';
import axios from 'axios';
import { getMoviesByName } from './api-fetch';
import { createMarkupOneCard } from './markup-cards';
import { createPagination } from './pagination';

const form = document.querySelector('.header-form');
const input = document.querySelector('.header-form-input');
const filmGallery = document.querySelector('.js-film-gallery');
const searchError = document.querySelector('.search-error');
if (!form) {
  return;
}
form.addEventListener('submit', onFormSubmit);

async function onFormSubmit(event) {
  event.preventDefault();
  const name = input.value.trim();
  input.value = name;

  try {
    if (name) {
      searchError.style.display = 'none';
      const response = await getMoviesByName(name);
      console.log(response.total_results);
      if (response.results.length < 1) {
        return (searchError.style.display = 'flex');
      }
      filmGallery.innerHTML = createMarkupOneCard(response.results);
      createPagination(response.total_results, 50);
    }
  } catch (error) {
    console.log(error.message);
  }
}
