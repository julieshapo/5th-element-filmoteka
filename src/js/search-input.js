import debounce from 'lodash.debounce';
import axios from 'axios';
import { getMoviesByName } from './api-fetch';
import { createMarkupOneCard } from './markup-cards';
import { createPagination } from './pagination';

const form = document.querySelector('.header-form');
const input = document.querySelector('.header-form-input');
const filmGallery = document.querySelector('.js-film-gallery');
const searchError = document.querySelector('.search-error');
const searchError2 = document.querySelector('.search-error2');
import Notiflix from 'notiflix';

export let name = '';

if (!form) {
  return;
}
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  queryVal = event.currentTarget.elements.searchQuery.value.trim();
  console.log(queryVal);
  searchError2.style.display = 'none';
  if (queryVal === '') {
    // return Notiflix.Notify.warning('Please, enter your search request');
    searchError2.style.display = 'flex';
    // setTimeout(() => {
    //   searchError2.style.display = 'none';
    // }, 5000);
  }
  if (name === input.value) {
    return;
  }
  name = input.value.trim();
  input.value = name;
  renderSearchFilms(name, 1, 1);
  console.log(event);
}

export async function renderSearchFilms(name, currentPage, firstPage) {
  try {
    if (name) {
      searchError.style.display = 'none';
      const response = await getMoviesByName(name, currentPage);
      if (response.results.length < 1) {
        searchError.style.display = 'flex';
        // setTimeout(() => {
        //   searchError.style.display = 'none';
        // }, 5000);
      }
      filmGallery.innerHTML = createMarkupOneCard(response.results);
      createPagination(response.total_results, 1, firstPage);
    }
  } catch (error) {
    console.log(error.message);
  }
}
