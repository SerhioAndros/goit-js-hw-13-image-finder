const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=';
const apiKey = '21715456-94146d2128778e129cf5897fe';

const fetchImages = (request, page) =>
  fetch(`${BASE_URL}${request}&page=${page}&per_page=12&key=${apiKey}`).then(res => {
    // if (res.status === 404) {
    //   throw new Error(`There are no such IMG in data-base`);
    // }
    return res.json();
  });
export { fetchImages };
