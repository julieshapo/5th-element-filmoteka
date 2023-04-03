// в локал сторіджі дані по фільмам бібліотеки треба зберігати як масив обєктів з усіма необхідними властивостями,
// а не масив просто айдішників.
import { watched } from './buttons';
import { createMarkupOneCard } from './markup-cards';
import { onClickMovie, onClodeModalClick, onBtnClickClose } from './modal-movie';
import { refs } from './refs';
import { btnQueue } from './queue-local-storage';
import { createPagination } from './pagination';

export const btnWatched = document.querySelector('.js-watched');
const libraryList = document.querySelector('.js-library_gallery');
const imgWatchedPlug = document.querySelector('.no-watched');
const imgQueuePlug = document.querySelector('.no-queue');

const ITEMS_PER_PAGES = 9;

let startElements = 0;
let endElements = ITEMS_PER_PAGES;

if (!libraryList) {
  return;
}
libraryList.addEventListener('click', onClickMovie);

refs.modalMovie.addEventListener('click', onBtnClickClose);
refs.modal.addEventListener('click', onClodeModalClick);

if (!btnWatched) {
  return;
}
btnWatched.addEventListener('click', markupWatched);

export function markupWatched(currentPage = 1) {
  if (!btnQueue) {
    return;
  }
  if (!btnWatched) {
    return;
  }

  btnQueue.style.backgroundColor = '';
  btnQueue.style.border = '';
  btnWatched.style.backgroundColor = '#ff6b02';
  btnWatched.style.border = 'none';
  btnWatched.disabled = true;
  btnQueue.disabled = false;

  if (!libraryList) {
    return;
  } else if (watched.length === 0) {
    imgWatchedPlug.style.display = 'block';
  } else if (watched.length > 0) {
    imgWatchedPlug.style.display = 'none';
  }
  imgQueuePlug.style.display = 'none';

  // Пагінатор
  if (!isNaN(currentPage)) {
    startElements = (currentPage - 1) * ITEMS_PER_PAGES;
    endElements = startElements + ITEMS_PER_PAGES;
  }
  const totalElements = watched.length;
  const filtredWatched = watched.slice(startElements, endElements);

  libraryList.innerHTML = createMarkupOneCard(filtredWatched);

  createPagination(totalElements, 3, 2, ITEMS_PER_PAGES);
}

document.addEventListener('DOMContentLoaded', markupWatched);
document.addEventListener('DOMContentLoaded', () => {
  btnWatched.style.backgroundColor = '#ff6b02';
  btnWatched.style.border = 'none';
});
