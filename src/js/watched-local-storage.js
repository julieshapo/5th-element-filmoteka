// в локал сторіджі дані по фільмам бібліотеки треба зберігати як масив обєктів з усіма необхідними властивостями,
// а не масив просто айдішників.
import { watched } from './buttons';
import { createMarkupOneCard } from './markup-cards';

const btnWatched = document.querySelector('.js-watched');
const libraryList = document.querySelector('.js-library_gallery');
const imgPlug = document.querySelector('.no-watched');

export function genresArray() {
  if (!watched[0]) {
    return;
  } else {
    return watched[0].genres.map(genre => genre.id);
  }
}

if (!btnWatched) {
  return;
}
btnWatched.addEventListener('click', markupWatched);

function markupWatched() {
  if (!libraryList) {
    return;
  } else if (watched.length === 0) {
    imgPlug.style.display = 'block';
  }
  libraryList.innerHTML = createMarkupOneCard(watched);
}

document.addEventListener('DOMContentLoaded', markupWatched);
