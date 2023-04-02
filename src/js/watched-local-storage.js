// в локал сторіджі дані по фільмам бібліотеки треба зберігати як масив обєктів з усіма необхідними властивостями,
// а не масив просто айдішників.
import { watched } from './buttons';
import { createMarkupOneCard } from './markup-cards';
import { onClickMovie, modalClose } from './modal-movie';
import { refs } from './refs';
import { btnQueue } from './queue-local-storage';
import { createPagination } from './pagination';

export const btnWatched = document.querySelector('.js-watched');
const libraryList = document.querySelector('.js-library_gallery');
const imgWatchedPlug = document.querySelector('.no-watched');
const imgQueuePlug = document.querySelector('.no-queue');

const ITEMS_PER_PAGES = 9;

let firstFunctionRun = 0;
let startElements = 0;
let endElements = ITEMS_PER_PAGES;

if (!libraryList) {
  return;
}
libraryList.addEventListener('click', onClickMovie);

refs.modal.addEventListener('click', onClodeModalClick);

function onClodeModalClick(e) {
  if (e.target === e.currentTarget) {
    modalClose();
  }
}

if (!btnWatched) {
  return;
}
btnWatched.addEventListener('click', markupWatched);

export function markupWatched(currentPage) {
  btnQueue.style.backgroundColor = '';
  btnQueue.style.border = '';
  btnWatched.style.backgroundColor = '#ff6b02';
  btnWatched.style.border = 'none';

  if (!libraryList) {
    return;
  } else if (watched.length === 0) {
    imgWatchedPlug.style.display = 'block';
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
  if (firstFunctionRun === 0) {
    createPagination(totalElements, 3, 0, ITEMS_PER_PAGES);
  }
  firstFunctionRun = 1;
}

document.addEventListener('DOMContentLoaded', markupWatched);
document.addEventListener('DOMContentLoaded', () => {
  btnWatched.style.backgroundColor = '#ff6b02';
  btnWatched.style.border = 'none';
});
