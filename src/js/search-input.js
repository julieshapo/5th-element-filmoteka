import debounce from 'lodash.debounce';
import axios from 'axios';
import { getMoviesByName } from './api-fetch';
import { createMarkupOneCard } from './markup-cards';
import { currentPage, createPagination } from './pagination';

const form = document.querySelector('.header-form');
const input = document.querySelector('.header-form-input');
const filmGallery = document.querySelector('.js-film-gallery');
const searchError = document.querySelector('.search-error');

export let name = '';

if (!form) {
  return;
}
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  if (name === input.value) {
    return;
  }
  name = input.value.trim();
  input.value = name;
  currentPage = 1;
  renderSearchFilms(name, 1);
}

export async function renderSearchFilms(name, currentPage) {
  try {
    if (name) {
      searchError.style.display = 'none';
      const response = await getMoviesByName(name, currentPage);
      if (response.results.length < 1) {
        return (searchError.style.display = 'flex');
      }
      filmGallery.innerHTML = createMarkupOneCard(response.results);
      createPagination(response.total_results, 21, 1);
      console.log(currentPage);
    }
  } catch (error) {
    console.log(error.message);
  }
}
