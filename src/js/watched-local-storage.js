// в локал сторіджі дані по фільмам бібліотеки треба зберігати як масив обєктів з усіма необхідними властивостями,
// а не масив просто айдішників.
import { watched } from './buttons';
import { createMarkupOneCard } from './markup-cards';
import { onClickMovie, modalClose } from './modal-movie';
import { refs } from './refs';
import { btnQueue } from './queue-local-storage';

export const btnWatched = document.querySelector('.js-watched');
const libraryList = document.querySelector('.js-library_gallery');
const imgWatchedPlug = document.querySelector('.no-watched');
const imgQueuePlug = document.querySelector('.no-queue');

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

export function markupWatched() {
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

  libraryList.innerHTML = createMarkupOneCard(watched);
}

document.addEventListener('DOMContentLoaded', markupWatched);
document.addEventListener('DOMContentLoaded', () => {
  btnWatched.style.backgroundColor = '#ff6b02';
  btnWatched.style.border = 'none';
});
