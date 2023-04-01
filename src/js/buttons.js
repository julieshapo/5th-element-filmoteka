import { refs } from './refs';
import { getMovieFullInfo } from './api-fetch';

// Массивы в которые пушаться обьекты фильма при нажатии на кнопки "watched" и "queue"

export let watched = JSON.parse(localStorage.getItem('watched')) || [];
export let queue = JSON.parse(localStorage.getItem('queue')) || [];
console.log(watched);

refs.modalMovie.addEventListener('click', onClickBtn);

// Функция отрабатывает клики по кнопкам на модалке и вызывает соответствующую функцию

export function onClickBtn(e) {
  const { add } = e.target.dataset;
  const parent = e.target.closest('div');
  const { id } = parent?.dataset || {};

  switch (add) {
    case 'watched':
      addToWatched(id);
      break;

    case 'queue':
      addToQueue(id);
      break;
  }
}

// Функция добаляет обьект фильма в массив "watched" если его там нет, и проверяет если он там есть - удаляет
// P.S. Вызывается по клику кнопки "watched"

export async function addToWatched(id) {
  try {
    const results = await getMovieFullInfo(id);

    const findFilm = watched.find(item => item.id === Number(id));
    const findIndex = watched.findIndex(item => item.id === Number(id));

    if (findFilm) {
      return;
    } else {
      watched.push(results);
      console.log(watched);
      localStorage.setItem('watched', JSON.stringify(watched));
    }
  } catch (error) {
    console.log(error.message);
  }
}

// Функция добаляет обьект фильма в массив "queue" если его там нет, и проверяет если он там есть - удаляет
// P.S. Вызывается по клику кнопки "queue"

export async function addToQueue(id) {
  try {
    const results = await getMovieFullInfo(id);

    const findFilm = queue.find(item => item.id === Number(id));
    const findIndex = queue.findIndex(item => item.id === Number(id));

    if (findFilm) {
      return;
    } else {
      queue.push(results);
      console.log(queue);
      localStorage.setItem('queue', JSON.stringify(queue));
    }
  } catch (error) {
    console.log(error.message);
  }
}
