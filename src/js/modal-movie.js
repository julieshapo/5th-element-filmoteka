// Функция которую которая покажет модалку при клике по карточке в списке фильмов  

// function onClickMovie() {
//   modal.classList.remove('visually-hidden');
//   window.addEventListener('keydown', onCloseModal);
// };

// Функция которую нужно вызвать что бы закрыть модалку

const modal = document.querySelector('.js-modal');

function modalClose() {
  modal.classList.add('visually-hidden');
  window.removeEventListener('keydown', onCloseModalKey);
};

// Функция закрытия модалки при нажатии по бекдропу

modal.addEventListener('click', onClodeModalClick);

function onClodeModalClick(e) {
  if (e.target === e.currentTarget) {
    modalClose();
  };
};

// Функция закрытия модалки при нажатии на клавишу ESCAPE

function onCloseModalKey(e) {
  if (e.code !== "Escape") {
    return
  } modalClose();
};

// Функция которорая ожидает обьект и рендерит разметку для модалки

function renderMarkupModalMovie() {
  return `<div class="movie-thumb">
      <img
        class="movie-img"
        src="https://github.com/julieshapo/5th-element-filmoteka/blob/main/src/images/no-photo/no-photo.jpg?raw=true"
        alt="hamster"
      />
    </div>
    <div class="movie-wrap">
      <h2 class="movie-title">A FISTFUL OF LEAD</h2>
      <div class="movie-list-wrap">
        <ul class="movie-info-list">
          <li>
            <p class="movie-info-text">Vote / Votes</p>
          </li>
          <li>
            <p class="movie-info-text">Popularity</p>
          </li>
          <li>
            <p class="movie-info-text">Original Title</p>
          </li>
          <li>
            <p class="movie-info-text">Genre</p>
          </li>
        </ul>
        <ul class="movie-info-list">
          <li>
            <p class="movie-info-value">
              <span class="movie-info-rating">7.3</span>
              <span class="movie-info-slash">/</span> 1260
            </p>
          </li>
          <li>
            <p class="movie-info-value">100.2</p>
          </li>
          <li>
            <p class="movie-info-value">A FISTFUL OF LEAD</p>
          </li>
          <li>
            <p class="movie-info-value">Western</p>
          </li>
        </ul>
      </div>
      <h3 class="mobie-about">About</h3>
      <p class="movie-desc">
        Four of the Wests most infamous outlaws assemble to steal a huge stash
        of gold from the most corrupt settlement of the gold rush towns.
      </p>
      <div class="movie-btn-wrap">
        <button data-movie="watched" class="movie-btn" type="button">
          add to Watched
        </button>
        <button data-movie="queue" class="movie-btn" type="button">
          add to queue
        </button>
      </div>
    </div>`
}

const modalMovie = document.querySelector('.modal-movie');

modalMovie.innerHTML = renderMarkupModalMovie();