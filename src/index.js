import './sass/main.scss';
import { fetchImages } from './js/apiService.js';
import makeGalMarkup from './templates/card.hbs';

import { alert, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

// alert({
//   text: 'Welcome to img search!',
// });

const nodes = {
  formNode: document.querySelector('#search-form'),
  formInput: document.querySelector('input'),
  galleryNode: document.querySelector('.gallery'),
  addImgBtn: document.querySelector('.add-imgs-btn'),
};

let requestString = '';
let currPage = 1;

nodes.formNode.addEventListener('click', searchImgFunction);

function searchImgFunction(e) {
  if (e.target.tagName !== 'BUTTON') return false;
  currPage = 1;
  requestString = stringSpaceEraze(nodes.formInput.value.trim());
  getImgs(requestString, currPage);
}

function getImgs(request, page) {
  fetchImages(request, page).then(data => (nodes.galleryNode.innerHTML = makeGalMarkup(data)));
}

function stringSpaceEraze(string) {
  return string.split(' ').join('%20');
}

nodes.addImgBtn.addEventListener('click', addImages);

function addImages(e) {
  currPage += 1;
  fetchImages(requestString, currPage).then(data => {
    nodes.galleryNode.insertAdjacentHTML('beforeend', makeGalMarkup(data));
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
    alert({
      text: `Page ${currPage}`,
    });
  });
}
