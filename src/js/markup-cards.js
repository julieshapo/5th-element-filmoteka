import { getMoviesTrending } from './api-fetch';

function createMarkupOneCard(array) {
    return array.map(item => {
        const geners = 'no geners';
        const date = item.release_date ?? item.first_air_date ?? null;
        const year = date ? date.slice(0, 4) : 'Unknown year';

        return `
    <li data-id=${item.id} class="film-item">
        <div class="card__image">
            <img src="https://image.tmdb.org/t/p/w500${item.backdrop_path}" alt="${item.title}">
        </div>
        <div class="card__content">
            <p class="card__title">${item.title}</p>
            <div class="card__genres">
                <p>${geners} | ${year}</p>
            </div>
        </div>
    </li>
    `
    }).join('');
};

const filmGallery = document.querySelector('.js-film-gallery');

async function TrendingMovie() {
    try {
        const { results } = await getMoviesTrending();
        filmGallery.innerHTML = createMarkupOneCard(results);
    } catch (error) {
        console.log(error.message);
    };
};

TrendingMovie();

//Desctop
//gap 32 16
//width 394
//height 634

//height 574

//Tablet
//gap 32
//width 336
//height 494
//radius 5

//height 455

//Mobile
//gap 20
//width 280
//height 443
//radius 5

//height 402

//image жанр рік