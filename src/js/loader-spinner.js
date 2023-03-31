import { refs } from './refs';

// Функция показывает спинер

export function showSpinner() {
  refs.spinner.classList.remove('visually-hidden');
}

// Функция прячет спинер

export function hideSpinner() {
  refs.spinner.classList.add('visually-hidden');
}
