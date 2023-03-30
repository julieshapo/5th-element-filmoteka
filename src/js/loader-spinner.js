const spinner = document.querySelector('.js-spinner');

// Функция показывает спинер

function showSpinner() {
  spinner.classList.remove('visually-hidden');
};

// Функция прячет спинер

function hideSpinner() {
  spinner.classList.add('visually-hidden');
};