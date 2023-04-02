import { refs } from './refs';

// Функция показывает спинер

export function showSpinner() {
  refs.spinner.classList.remove('visually-hidden');
}

// Функция прячет спинер

export function hideSpinner() {
  refs.spinner.classList.add('visually-hidden');
}

 window.onload = function () {
    showSpinner();
    window.setTimeout(function () {
      document.body.classList.add('loaded');
       hideSpinner();
    }, 2000);
  }