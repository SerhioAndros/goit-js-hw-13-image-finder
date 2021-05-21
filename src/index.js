import './sass/main.scss';
import { fetchImages } from './js/apiService.js';
import makeGalMarkup from './templates/card.hbs';
const nodes = {
  formNode: document.querySelector('#search-form'),
  formInput: document.querySelector('input'),
  galleryNode: document.querySelector('.gallery'),
  addImgBtn: document.querySelector('.add-imgs-btn'),
};
// const formNode = document.querySelector('#search-form');
// const formInput = formNode.firstElementChild;
// const galleryNode = document.querySelector('.gallery');
let requestString = '';
let currPage = 1;

nodes.formNode.addEventListener('click', searchImgFunction);

function searchImgFunction(e) {
  if (e.target.tagName !== 'BUTTON') return false;
  requestString = stringSpaceEraze(nodes.formInput.value.trim());
  getImgs(requestString, currPage);
}

function getImgs(request, page) {
  fetchImages(request, page).then(data => (nodes.galleryNode.innerHTML = makeGalMarkup(data)));
  currPage += 1;
}

function stringSpaceEraze(string) {
  return string.split(' ').join('%20');
}

nodes.addImgBtn.addEventListener('click', addImages);

function addImages(e) {
  fetchImages(requestString, currPage).then(data =>
    nodes.galleryNode.insertAdjacentHTML('beforeend', makeGalMarkup(data)),
  );
  currPage += 1;
}
