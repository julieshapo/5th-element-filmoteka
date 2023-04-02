import Pagination from 'tui-pagination';
import { refs } from './refs';
import 'tui-pagination/dist/tui-pagination.min.css';
import { renderSearchFilms, name } from './search-input';
import { TrendingMovie } from './markup-cards';

const TUI_PAGES_VISIBLE = 5;
export let currentPage = 1;

export function createPagination(totalItems, itemsPerPage, option) {
  const options = {
    page: currentPage,
    itemsPerPage,
    centerAlign: true,
    totalItems,
    visiblePages: TUI_PAGES_VISIBLE,
    // visiblePages: visiblePages < 5 ? visiblePages : TUI_PAGES_VISIBLE,
  };

  pagination = new Pagination(refs.pagination, options);

  // currentPage = pagination.getCurrentPage();
  if (option === 1) {
    pagination.on('beforeMove', event => {
      currentPage = event.page;
      renderSearchFilms(name, currentPage);
      console.log(currentPage);
      // if (currentPage === 10) {
      //   return false;
      //   // return true;
      // }
    });
  }
  if (option === 2) {
    pagination.on('beforeMove', event => {
      currentPage = event.page;
      TrendingMovie(currentPage);
      console.log(currentPage);
      // if (currentPage === 10) {
      //   return false;
      //   // return true;
      // }
    });
  }

  // if (visiblePages > 1) {
  //   refs.pagination.style.display = 'block';
  // } else {
  //   refs.pagination.style.display = 'none';
  // }
}

// paganation.on('beforeMove', event => {
//   const currentPage = event.page;

//   if (currentPage === 10) {
//     return false;
//     // return true;
//   }
// });
