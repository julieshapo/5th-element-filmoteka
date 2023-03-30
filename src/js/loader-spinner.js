const spinner = document.querySelector('.js-spinner');

// Функция показывает спинер

export function showSpinner() {
  spinner.classList.remove('visually-hidden');
};

// Функция прячет спинер

export function hideSpinner() {
  spinner.classList.add('visually-hidden');
};