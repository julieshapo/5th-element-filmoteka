import { refs } from './refs';
import { genresFormatModal } from './geners';
import { getMovieFullInfo } from './api-fetch';

// Функция которую которая покажет модалку при клике по карточке в списке фильмов
if (!refs.filmGallery) {
  return;
}
refs.filmGallery.addEventListener('click', onClickMovie);

export function onClickMovie(e) {
  const parent = e.target.closest('li');
  const { id } = parent?.dataset || {};
  if (!id) {
    return;
  }
  showMovieInfo(id);
  refs.modal.classList.remove('visually-hidden');
  window.addEventListener('keydown', onCloseModalKey);
};

// Функция делает запрос за полной инфой по фильму и отображает её в модалке

async function showMovieInfo(id) {
  try {
    const results = await getMovieFullInfo(id);
    const geners = genresFormatModal(results.genres).join(', ');
    const poster = results.poster_path
      ? `https://image.tmdb.org/t/p/w500/${results.poster_path}`
      : 'https://github.com/julieshapo/5th-element-filmoteka/blob/main/src/images/no-photo/no-photo.png?raw=true';
    refs.modalMovie.innerHTML = renderMarkupModalMovie(results, poster, geners);
  } catch (error) {
    console.log(error.message);
  };
};

// Функция которую нужно вызвать что бы закрыть модалку

export function modalClose() {
  refs.modal.classList.add('visually-hidden');
  window.removeEventListener('keydown', onCloseModalKey);
};

// Функция закрытия модалки при нажатии по бекдропу

refs.modal.addEventListener('click', onClodeModalClick);

function onClodeModalClick(e) {
  if (e.target === e.currentTarget) {
    modalClose();
  };
};

// Функция которая закрывает модалку при нажатии на крестик

refs.modalMovie.addEventListener('click', onTrailerBtnClick);

function onTrailerBtnClick(e) {
  const {btn} = e.target.dataset
  if (btn === 'close') {
    return
  }
  modalClose();
};

// Функция закрытия модалки при нажатии на клавишу ESCAPE

function onCloseModalKey(e) {
  if (e.code !== 'Escape') {
    return;
  }
  modalClose();
};

// Функция которорая ожидает обьект и рендерит разметку для модалки

function renderMarkupModalMovie(object, poster, geners) {
  return `<div class="movie-thumb">
      <img
        class="movie-img"
        src="${poster}"
        alt="${object.title}"
      />
    </div>
    <div class="movie-wrap">
      <h2 class="movie-title">${object.title}</h2>
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
              <span class="movie-info-rating">${object.vote_average.toFixed(
                1
              )}</span>
              <span class="movie-info-slash">/</span> ${object.vote_count}
            </p>
          </li>
          <li>
            <p class="movie-info-value">${
              object.popularity.toFixed(1) ?? '-'
            }</p>
          </li>
          <li>
            <p class="movie-info-value">${object.original_title}</p>
          </li>
          <li>
            <p class="movie-info-value">${geners}</p>
          </li>
        </ul>
      </div>
      <h3 class="mobie-about">About</h3>
      <p class="movie-desc">
        ${object.overview ?? '- - -'}
      </p>
      <div data-id="${object.id}" class="movie-btn-wrap">
        <button data-add="watched" class="movie-btn" type="button">
          add to Watched
        </button>
        <button data-add="queue" class="movie-btn" type="button">
          add to queue
        </button>
        <button data-btn="watch-trailer" class="trailer-btn" type="button">
        <svg class="youtube" width="70" height="70" viewBox="6 3 30 30" style="width: 80px; height: 44px">
    <use xlink:href="./images/svg/symbol-defs.svg#youtube" />
    <path d="M31.681 9.6c0 0-0.313-2.206-1.275-3.175-1.219-1.275-2.581-1.281-3.206-1.356-4.475-0.325-11.194-0.325-11.194-0.325h-0.012c0 0-6.719 0-11.194 0.325-0.625 0.075-1.987 0.081-3.206 1.356-0.963 0.969-1.269 3.175-1.269 3.175s-0.319 2.588-0.319 5.181v2.425c0 2.587 0.319 5.181 0.319 5.181s0.313 2.206 1.269 3.175c1.219 1.275 2.819 1.231 3.531 1.369 2.563 0.244 10.881 0.319 10.881 0.319s6.725-0.012 11.2-0.331c0.625-0.075 1.988-0.081 3.206-1.356 0.962-0.969 1.275-3.175 1.275-3.175s0.319-2.587 0.319-5.181v-2.425c-0.006-2.588-0.325-5.181-0.325-5.181zM12.694 20.15v-8.994l8.644 4.513-8.644 4.481z"></path>
</symbol>
    </svg>
      </button>
      <button data-btn="close" class="modal-movie-close" type="button">
        <svg class="close-svg" width="20" height="20" viewBox="6 3 30 30" style="width: 40px; height: 35px">
    <use xlink:href="./images/svg/symbol-defs.svg#menu-close" />
    <path d="M23.734 10.304l-1.504-1.504-5.963 5.962-5.962-5.962-1.504 1.504 5.962 5.962-5.962 5.963 1.504 1.504 5.962-5.963 5.963 5.963 1.504-1.504-5.963-5.963 5.963-5.962z"></path>
</symbol>
    </svg>
      </button>
      </div>
    </div>`;
};