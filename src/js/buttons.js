import { refs } from './refs';
import { getMovieFullInfo } from './api-fetch';
import { setWatchedLS, setQueueLS } from './local-storage';

// Массивы в которые пушаться обьекты фильма при нажатии на кнопки "watched" и "queue"

export let watched = JSON.parse(localStorage.getItem('watched')) || [];
export let queue = JSON.parse(localStorage.getItem('queue')) || [];

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
  };
};

// Функция добаляет обьект фильма в массив "watched" если его там нет, и проверяет если он там есть - удаляет
// P.S. Вызывается по клику кнопки "watched"

export async function addToWatched(id) {
  try {
    const results = await getMovieFullInfo(id);

    const findFilm = watched.find(item => item.id === Number(id));
    const findIndex = watched.findIndex(item => item.id === Number(id));

    if (findFilm) {
      watched.splice(findIndex, 1);
      setWatchedLS(watched);
    } else {
      watched.push(results);
      setWatchedLS(watched);
    }
  } catch (error) {
    console.log(error.message);
  };
};

// Функция добаляет обьект фильма в массив "queue" если его там нет, и проверяет если он там есть - удаляет
// P.S. Вызывается по клику кнопки "queue"

export async function addToQueue(id) {
  try {
    const results = await getMovieFullInfo(id);

    const findFilm = queue.find(item => item.id === Number(id));
    const findIndex = queue.findIndex(item => item.id === Number(id));

    if (findFilm) {
      queue.splice(findIndex, 1);
      setQueueLS(queue);
    } else {
      queue.push(results);
      setQueueLS(queue);
    }
  } catch (error) {
    console.log(error.message);
  };
};