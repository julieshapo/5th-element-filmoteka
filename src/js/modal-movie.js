import { refs } from './refs';
import { genresFormatModal } from './geners';
import { getMovieFullInfo } from './api-fetch';
import { markupWatched } from './watched-local-storage';

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
}

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
  }
}

// Функция которую нужно вызвать что бы закрыть модалку

export function modalClose() {
  markupWatched();
  refs.modal.classList.add('visually-hidden');
  window.removeEventListener('keydown', onCloseModalKey);
}

// Функция закрытия модалки при нажатии по бекдропу

refs.modal.addEventListener('click', onClodeModalClick);

function onClodeModalClick(e) {
  if (e.target === e.currentTarget) {
    modalClose();
  }
}

// Функция закрытия модалки при нажатии на клавишу ESCAPE

function onCloseModalKey(e) {
  if (e.code !== 'Escape') {
    return;
  }
  modalClose();
}

// Функция которорая ожидает обьект и рендерит разметку для модалки

function renderMarkupModalMovie(object, poster, geners) {
  return `<div class="movie-thumb">
      <img
        class="movie-img"
        src="${poster}"
        alt="${object.title}"
      />
      <button data-btn="watchTrailer" class="trailerBtn" type="button">
          Watched trailer
        </button>
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
      </div>
    </div>`;
}
