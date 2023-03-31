import { fetchGenres } from './api-fetch';
import { fetchPopularMovies } from './api-fetch';

const NO_POSTER = `https://www.bworldonline.com/wp-content/uploads/2022/04/cinema02_14-01.jpg`;
const moviesEl = document.querySelector('.movies');

export function getGenres(arrayId, genres) {
  const arr = [];
  for (const value of genres) {
    if (arrayId.includes(value.id)) {
      arr.push(value.name);
    }
  }
  if (arrayId.length > 2) {
    arr.splice(2, arr.length - 2, 'Other');
  }

  return arr.join(', ');
}

async function renderGallery(movies) {
  const genres = await fetchGenres();
  return movies
    .map(
      ({
        id,
        poster_path,
        title,
        release_date,
        genre_ids,
        original_title,
        vote_average,
      } = movies) => {
        const poster = poster_path
          ? `https://image.tmdb.org/t/p/w500${poster_path}`
          : NO_POSTER;
        const releaseYear = release_date
          ? release_date.split('-')[0]
          : 'Unknown';
        const checkGenres = genre_ids
          ? getGenres(genre_ids, genres)
          : 'Unknown';
        return `
      <li class='movie_list_item' data-id="${id}>
      <a href="" class='movie_list_link link' id=${id}>
        <img class="movie_list_image" src=${poster} alt='Poster ${original_title}' loading='lazy' />
        <div class='movie-info'>
            <p class='movie-title'>
              <b>${title.toUpperCase()}</b>
            </p>
            <p class='movie-date'>
              <span>${checkGenres} | ${releaseYear}</span>
            </p>
            <div class="movie__average">${vote_average.toFixed(1)}</div>
        </div>
        </a>
      </li>
      `;
      }
    )
    .join('');
}

fetchPopularMovies(2)
  .then(res => {
    const obj = res.results;
    return renderGallery(obj);
  })
  .then(res => {
    moviesEl.insertAdjacentHTML('beforeend', res);
  });
