import { getMoviesTrending } from './api-fetch';
import { genresFormat } from './geners';
import { refs } from './refs';
import { genresArray } from './watched-local-storage';

TrendingMovie();

// Функция которая ожидает и перебирает массив и возвращает разметку карточек фильмов

export function createMarkupOneCard(array) {
  return array
    .map(item => {
      const geners = genresFormat(item.genre_ids || genresArray()).join(', ');
      const date = item.release_date ?? item.first_air_date ?? null;
      const year = date ? date.slice(0, 4) : 'Unknown year';

      const poster = item.poster_path
        ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
        : 'https://github.com/julieshapo/5th-element-filmoteka/blob/main/src/images/no-photo/no-photo.jpg?raw=true';

      return `
    <li data-id=${item.id} class="film-item">
    <div class="thumb">
            <img
              src="https://image.tmdb.org/t/p/w500${poster}"
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

async function TrendingMovie() {
  try {
    const { results } = await getMoviesTrending();

    if (!refs.filmGallery) {
      return;
    }

    refs.filmGallery.innerHTML = createMarkupOneCard(results);
  } catch (error) {
    console.log(error.message);
  }
}
