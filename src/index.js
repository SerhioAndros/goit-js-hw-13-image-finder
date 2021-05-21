import './sass/main.scss';
import { fetchImages } from './js/apiService.js';
const formNode = document.querySelector('#search-form');
const formInput = formNode.firstElementChild;

formNode.addEventListener('click', searchImgFunction);

function searchImgFunction(e) {
  if (e.target.tagName !== 'BUTTON') return false;
  //   console.log(fetchImages(formInput.value));
  console.log(typeof formInput.value.trim());
}
// function stringSpaceEraze(string) {
//   // let newString = "",
// }
