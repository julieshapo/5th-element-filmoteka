// в локал сторіджі дані по фільмам бібліотеки треба зберігати як масив обєктів з усіма необхідними властивостями,
// а не масив просто айдішників.
import { queue } from './buttons';
import { createMarkupOneCard } from './markup-cards';
import { onClickMovie, modalClose } from './modal-movie';
import { refs } from './refs';
import { btnWatched } from './watched-local-storage';

export const btnQueue = document.querySelector('.js-queue');
const libraryList = document.querySelector('.js-library_gallery');
const imgPlug = document.querySelector('.no-watched');

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

export function markupQueue() {
  btnWatched.style.backgroundColor = '';
  btnWatched.style.border = '';
  btnQueue.style.backgroundColor = '#ff6b02';
  btnQueue.style.border = 'none';

  if (!libraryList) {
    return;
  }
  imgPlug.style.display = 'none';

  libraryList.innerHTML = createMarkupOneCard(queue);
}
