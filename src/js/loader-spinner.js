import { refs } from './refs';

// Функция показывает спинер

export function showSpinner() {
  refs.spinner.classList.remove('visually-hidden');
}

// Функция прячет спинер

export function hideSpinner() {
  refs.spinner.classList.add('visually-hidden');
}

// Альтернативный вариант функции фетча

// export async function getTrending(page = 1) {
//   const url = `${MAIN_URL}/trending/all/day?api_key=${API_KEY}&language=en-US&page=${page}`;
//   const { data } = await axios
//     .get(url);
//   return data.results
// };