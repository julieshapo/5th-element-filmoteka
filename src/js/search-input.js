import debounce from 'lodash.debounce';
import axios from 'axios';
import { getMoviesByName } from './api-fetch';
import { createMarkupOneCard } from './markup-cards';
import { createPagination } from './pagination';
import Notiflix from 'notiflix';

const ITEMS_PER_PAGES = 20;

const form = document.querySelector('.header-form');
const input = document.querySelector('.header-form-input');
const filmGallery = document.querySelector('.js-film-gallery');
const searchError = document.querySelector('.search-error');

// let firstFunctionRun = 0;

export let name = '';

if (!form) {
  return;
}
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const queryVal = event.currentTarget.elements.searchQuery.value.trim();
  if (queryVal === '') {
    return Notiflix.Notify.warning('Please, enter your search request');
  }
  if (name === input.value) {
    return;
  }
  name = input.value.trim();
  input.value = name;
  renderSearchFilms(name, 1, 1);
}

export async function renderSearchFilms(name, currentPage, firstPage) {
  try {
    if (name) {
      searchError.style.display = 'none';
      const response = await getMoviesByName(name, currentPage);
      if (response.results.length < 1) {
        return Notiflix.Notify.failure(
          'Sorry, there are no movies matching your search query. Please try again'
        );
      }
      filmGallery.innerHTML = createMarkupOneCard(response.results);

      createPagination(response.total_results, 1, firstPage, ITEMS_PER_PAGES);
    }
  } catch (error) {
    console.log(error.message);
  }
}
