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
    template: {
      page: '<a href="#" class="page-btn">{{page}}</a>',
      // moveButton:
      //   '<a href="#" class="tui-page-btn tui-{{type}}">' +
      //   '<span class="tui-first-{{type}}">1</span>' +
      //   `<span class="tui-total-{{type}}">${totalItems}</span>` +
      //   '<svg class="logo-icon" width="24" height="24">' +
      //   '<use href="../images/svg/symbol-defs.svg#icon-film">' +
      //   '</use>' +
      //   '</svg>' +
      //   '</a>',

      currentPage:
        '<strong class="page-btn page-btn-is-selected">{{page}}</strong>',
      disabledMoveButton:
        '<span class="page-btn tui-is-disabled castom-btn-{{type}}">' +
        '<span class="custom-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="page-btn castom-{{type}}-is-ellip">' +
        '<span class="custom-ico-ellip">...</span>' +
        '</a>',
    },
  };

  pagination = new Pagination(refs.pagination, options);

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
