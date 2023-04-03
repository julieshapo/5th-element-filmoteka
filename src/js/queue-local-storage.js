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
btnQueue.addEventListener('click', () => {
  btnWatched.classList.remove('is-active');
  btnQueue.classList.add('is-active');
});

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
  if (!btnQueue || !btnWatched) {
    return;
  }

  if (!btnQueue.classList.contains('is-active')) {
    return;
  }

  btnWatched.style.backgroundColor = '';
  btnWatched.style.border = '';
  btnQueue.style.backgroundColor = '#ff6b02';
  btnQueue.style.border = 'none';
  btnWatched.disabled = false;
  btnQueue.disabled = true;

  if (!libraryList) {
    return;
  } else if (queue.length === 0) {
    imgQueuePlug.style.display = 'block';
  } else if (queue.length > 0) {
    imgQueuePlug.style.display = 'none';
  }

  imgWatchedPlug.style.display = 'none';

  // Пагінатор
  if (!isNaN(currentPage)) {
    startElements = (currentPage - 1) * ITEMS_PER_PAGES;
    endElements = startElements + ITEMS_PER_PAGES;
  }
  const totalElements = queue.length;
  const filtredQueue = queue.slice(startElements, endElements);

  libraryList.innerHTML = createMarkupOneCard(filtredQueue);
  createPagination(totalElements, 4, 3, ITEMS_PER_PAGES);

  firstFunctionRun = 1;
}
