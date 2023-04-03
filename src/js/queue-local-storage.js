// в локал сторіджі дані по фільмам бібліотеки треба зберігати як масив обєктів з усіма необхідними властивостями,
// а не масив просто айдішників.
import { queue } from './buttons';
import { createMarkupOneCard } from './markup-cards';
import { onClickMovie, modalClose } from './modal-movie';
import { refs } from './refs';
import { btnWatched } from './watched-local-storage';
import { createPagination } from './pagination';

export const btnQueue = document.querySelector('.js-queue');
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

if (!btnQueue) {
  return;
}
btnQueue.addEventListener('click', markupQueue);

export function markupQueue(currentPage = 1) {
  btnWatched.style.backgroundColor = '';
  btnWatched.style.border = '';
  btnQueue.style.backgroundColor = '#ff6b02';
  btnQueue.style.border = 'none';

  if (!libraryList) {
    return;
  } else if (queue.length === 0) {
    imgQueuePlug.style.display = 'block';
  }

  imgWatchedPlug.style.display = 'none';

  // Пагінатор
  if (!isNaN(currentPage)) {
    startElements = (currentPage - 1) * ITEMS_PER_PAGES;
    endElements = startElements + ITEMS_PER_PAGES;
  }
  console.log(queue);
  const totalElements = queue.length;
  const filtredQueue = queue.slice(startElements, endElements);

  libraryList.innerHTML = createMarkupOneCard(filtredQueue);
  if (firstFunctionRun === 0) {
    createPagination(totalElements, 4, 0, ITEMS_PER_PAGES);
  }
  firstFunctionRun = 1;
}
