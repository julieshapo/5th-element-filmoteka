import Pagination from 'tui-pagination';
import { refs } from './refs';
import 'tui-pagination/dist/tui-pagination.min.css';
import { renderSearchFilms, name } from './search-input';
import { TrendingMovie } from './markup-cards';

const TUI_PAGES_VISIBLE = 5;
const TUI_ITEM_PER_PAGE = 20;

let currentPage = 1;

export function createPagination(totalItems, option, firstPage) {
  const options = {
    page: currentPage,
    itemsPerPage: TUI_ITEM_PER_PAGE,
    centerAlign: true,
    totalItems,
    visiblePages: TUI_PAGES_VISIBLE,
  };

  const pagination = new Pagination(refs.pagination, options);

  if (firstPage === 1) {
    pagination.reset();
  }
  if (option === 1) {
    pagination.on('beforeMove', event => {
      currentPage = event.page;
      renderSearchFilms(name, currentPage, 0);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  if (option === 2) {
    pagination.on('beforeMove', event => {
      currentPage = event.page;
      TrendingMovie(currentPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
