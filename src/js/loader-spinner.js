const spinner = document.querySelector('.js-spinner');

function showSpinner() {
  spinner.classList.remove('visually-hidden');
};

function hideSpinner() {
  spinner.classList.add('visually-hidden');
};