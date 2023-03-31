import { getMoviesTrending } from './api-fetch';
import { refs } from './refs';

function createMarkupOneCard(array) {
    return array.map(item => {
        const geners = 'no geners';
        const date = item.release_date ?? item.first_air_date ?? null;
        const year = date ? date.slice(0, 4) : 'Unknown year';

        return `
    <li data-id=${item.id} class="film-item">
    <div class="thumb">
            <img
              src="https://image.tmdb.org/t/p/w500${item.poster_path}"
              alt="${item.title}
              class="film-label"
            />
          </div>
          <div>
            <p class="film-title">${item.title}</p>
            <p class="film-genre">${geners} | ${year}</p>
          </div>          
    </li>
    `
    }).join('');
};

TrendingMovie();

async function TrendingMovie() {
  try {
    const { results } = await getMoviesTrending();
      refs.filmGallery.innerHTML = createMarkupOneCard(results);
  } catch (error) {
      console.log(error.message);
  };
};