const btn = document.querySelector('.btn');

// 

btn.addEventListener('click', onClickMovie);

function onClickMovie() {
  modal.classList.remove('visually-hidden');
  window.addEventListener('keydown', onCloseModal);
};

// 

const modal = document.querySelector('.js-modal');

function modalClose() {
  modal.classList.add('visually-hidden');
  window.removeEventListener('keydown', onCloseModal);
};

modal.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) {
    modalClose();
  };
});

function onCloseModal(e) {
  if (e.code !== "Escape") {
    return
  } modalClose();
};