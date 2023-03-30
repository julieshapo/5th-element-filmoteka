export function createMarkupOneCard(data) {
    const genres = data.genres.map(genre => `${genre}`).join(', ');
    const markup = `
    <div class="card">
        <div class="card__image">
            <img src="${data.image}" alt="${data.title}">
        </div>
        <div class="card__content">
            <div class="card__title">${data.title}</div>
            <div class="card__genres">
                <div>${genres} | ${data.year}</div>
            </div>
        </div>
    </div>
    `;
    return markup;
}
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