import Pagination from 'tui-pagination';
import { refs } from './refs';
import 'tui-pagination/dist/tui-pagination.min.css';
import { renderSearchFilms, name } from './search-input';

const TUI_PAGES_VISIBLE = 5;
export let currentPage = 1;
export let pagination = '';

export function createPagination(totalItems, itemsPerPage) {
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
  pagination.on('beforeMove', event => {
    currentPage = event.page;
    renderSearchFilms(name, currentPage);
    console.log(currentPage);
    // if (currentPage === 10) {
    //   return false;
    //   // return true;
    // }
  });

  if (currentPage === 1) {
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
