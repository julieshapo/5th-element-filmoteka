import Pagination from 'tui-pagination';
import { refs } from './refs';
import 'tui-pagination/dist/tui-pagination.min.css';
import { renderSearchFilms, name } from './search-input';
import { TrendingMovie } from './markup-cards';
import { markupWatched } from './watched-local-storage';
import { markupQueue } from './queue-local-storage';

const TUI_PAGES_VISIBLE = 5;

let currentPage = 1;
let currentWatchedPage = 1;
let currentQueuePage = 1;

export function createPagination(totalItems, option, firstPage, itemsPerPage) {
  const options = {
    page: currentPage,
    itemsPerPage,
    centerAlign: true,
    totalItems,
    visiblePages: TUI_PAGES_VISIBLE,
  };

  const pagination = new Pagination(refs.pagination, options);

  if (firstPage === 1) {
    pagination.reset();
  }
  if (firstPage === 2) {
    pagination.reset();
    pagination.movePageTo(currentWatchedPage);
  }
  if (firstPage === 3) {
    pagination.reset();
    pagination.movePageTo(currentQueuePage);
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
  if (option === 3) {
    pagination.on('beforeMove', event => {
      currentWatchedPage = event.page;
      markupWatched(currentWatchedPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  if (option === 4) {
    pagination.on('beforeMove', event => {
      currentQueuePage = event.page;
      markupQueue(currentQueuePage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
