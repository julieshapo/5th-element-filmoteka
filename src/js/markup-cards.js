import { getMoviesTrending } from './api-fetch';
import { genresFormat } from './geners';
import { refs } from './refs';
import { createPagination } from './pagination';
import { genresArray } from './watched-local-storage';

const ITEMS_PER_PAGES = 20;

// let firstFunctionRun = 0;

TrendingMovie();

// Функция которая ожидает и перебирает массив и возвращает разметку карточек фильмов

export function createMarkupOneCard(array) {
  return array
    .map(item => {
      const genresFormatGetId = item.genres?.map(genre => genre.id);
      const geners = genresFormat(item.genre_ids || genresFormatGetId).join(
        ', '
      );
      const date = item.release_date ?? item.first_air_date ?? null;
      const year = date ? date.slice(0, 4) : 'Unknown year';

      const poster = item.poster_path
        ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
        : 'https://github.com/julieshapo/5th-element-filmoteka/blob/main/src/images/no-photo/no-photo.png?raw=true';

      return `
    <li data-id=${item.id} class="film-item">
    <div class="thumb">
            <img
              src="${poster}"
              alt="${item.title}
              class="film-label"
            />
          </div>
          <div class="film-wrap">
            <p class="film-title">${item.title}</p>
            <p class="film-genre">${geners} | ${year}</p>
          </div>          
    </li>
    `;
    })
    .join('');
}

// Функция которая ожидает ответа от апи и вставляет разметку в галерею фильмов

export async function TrendingMovie(currentPage) {
  try {
    const { results, total_results } = await getMoviesTrending(currentPage);
    if (!refs.filmGallery) {
      return;
    }
    refs.filmGallery.innerHTML = createMarkupOneCard(results);
    createPagination(total_results, 2, 0, ITEMS_PER_PAGES);
    // if (firstFunctionRun === 0) {
    //   createPagination(total_results, 2, 0, ITEMS_PER_PAGES);
    // }
    // firstFunctionRun = 1;
  } catch (error) {
    console.log(error.message);
  }
}
