import { Pagination } from 'tui-pagination';
import refs from './refs';

const TUI_PAGES_VISIBLE = 5;

export function createPagination(totalItems, visiblePages) {
  const options = {
    itemsPerPage: 9,
    totalItems: totalItems,
    visiblePages: visiblePages < 5 ? visiblePages : TUI_PAGES_VISIBLE,
  };

  const pagination = new Pagination(refs.pagination, options);

  if (visiblePages > 1) {
    refs.pagination.style.display = 'block';
  } else {
    refs.pagination.style.display = 'none';
  }

  return pagination;
}
