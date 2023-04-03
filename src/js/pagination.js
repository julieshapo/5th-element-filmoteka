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
    template: {
      page: '<a href="#" class="page-btn">{{page}}</a>',
      moveButton: type => {
        let template = '';

        const keys = Object.values(type).join('');
        if (keys === 'first') {
          template = `<a href="#" class="page-btn tui-${Object.values(type)}">
            <span class="castom-ico-${Object.values(type)}">1</span></a>`;
        }
        if (keys === 'last') {
          template = `<a href="#" class="page-btn tui-${Object.values(type)}">
            <span class="castom-ico-${Object.values(type)}">${Math.ceil(
            totalItems / itemsPerPage
          )}</span></a>`;
        }
        if (keys === 'next') {
          template = `<a href="#" class="page-btn tui-${Object.values(type)}">
            <span class="castom-ico-${Object.values(type)}">next</span></a>`;
        }
        if (keys === 'prev') {
          template = `<a href="#" class="page-btn tui-${Object.values(type)}">
            <span class="castom-ico-${Object.values(type)}">prev</span></a>`;
        }
        if (!template) {
          return;
        }
        return template;
      },

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

  const pagination = new Pagination(refs.pagination, options);

  // const nextParent = document.querySelector('.tui-next');
  // const nextButton = document.querySelector('.castom-ico-next');
  // nextButton.innerHTML =
  //   '';
  // nextParent.appendChild(nextButton);
  // console.log(nextButton);
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
