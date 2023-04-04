import { refs } from './refs';
import { getMovieTrailer } from './api-fetch';
import * as basicLightbox from 'basiclightbox';

refs.modalMovie.addEventListener('click', onTrailerBtnClick);

function onTrailerBtnClick(e) {
  const parent = e.target.closest('div');
  const button = e.target.closest('button');
  const { trailer } = button?.dataset || {};
  const { id } = parent?.dataset || {};

  if (!trailer) {
    return
  }
  
  showTrailer(id);
};

let key = '';

async function showTrailer(id) {
  try {
    const { results } = await getMovieTrailer(id);
    const trailer = results.find(item => item.type === 'Trailer');

    if (trailer && trailer.type !== 'Trailer') {
      return
    };
    key = trailer ? trailer.key : '';

    showHideTrailer();

  } catch (error) {
    console.log(error.message);
  };
};

function showHideTrailer(e) {
  const instance = basicLightbox.create(`
  <iframe class="modal-trailer" src="https://www.youtube.com/embed/${key}" width="560" height="315" frameborder="0"></iframe>`,
    {
      onShow: () => {
        document.addEventListener("keydown", closeModal);
      },
      onClose: () => {
        document.removeEventListener("keydown", closeModal);
      },
    });
  
  instance.show();
  
  function closeModal(e) {
    if (e.code === 'Escape') {
      instance.close();
    };
  };
};