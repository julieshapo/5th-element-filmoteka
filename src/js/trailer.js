// import * as basicLightbox from 'basiclightbox'
// import { getMovieTrailer } from './api-fetch'


// let movie_id = localStorage.getItem('movie_id');

// const trailerBtn = document.querySelector('.modal-movie');

// trailerBtn.onclick = () => {
//   // кнопка працює, але не підтягується відео з сторіджа
//   console.log('click')
//   basicLightbox.create(
//     `<iframe src="${movie_id}" width="640" height="360"
//     title="" frameborder="0"
//     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
//   ).show();
// };



// 
// import * as basicLightbox from 'basiclightbox';
// import { getMovieTrailer } from './api-fetch';

// const trailerBtn = document.querySelector('.modal-movie');
// let movie_id = localStorage.getItem('movie_id');

// trailerBtn.onclick = async () => {
//   try {
//     const data = await getMovieTrailer(movie_id);
//     const videoKey = data.results[0].key;
//     const videoUrl = `https://www.youtube.com/embed/${videoKey}`;
//     basicLightbox.create(
//       `<iframe src="${videoUrl}" width="640" height="360"
//       title="" frameborder="0"
//       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
//     ).show();
//   } catch (error) {
//     console.log(error);
//   }
// };

// import { refs } from './refs';

// refs.modalMovie.addEventListener('click', onTrailerBtnClick);

// function onTrailerBtnClick(e) {
//   const {btn} = e.target.dataset
//   if (!btn) {
//     return
//   }
//   console.log('тут вызывается функция которая покажет видео')
// }