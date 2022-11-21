import '../component/search-bar.js';
import DataSource from '../data/data-source.js';


const main = () => {
  const searchElement = document.querySelector('#search-bar');
  const clubListElement = document.querySelector('#clubList');


  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchClub(searchElement.value)
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    clubListElement.innerHTML = '';
    results.forEach(function (movie) {
      const { name, fanArt, description } = movie;


      const MovieElement = document.createElement('div');
      MovieElement.setAttribute('class', 'movie');


      clubElement.innerHTML = `
      <img class="fan-art-movie" src="${fanArt}" alt="Fan Art">
          <div class="movie-info">
          <h2>${name}</h2>
          <p>${description}</p>
          </div>
  `;

      clubElement.innerHTML = `
  <img class="fan-art-movie" src="${fanArt}" alt="Fan Art">
  <div class="movie-info">
    <h2>${name}</h2>
    <p>${description}</p>
  </div>
  `;
      movieListElement.appendChild(movieElement);

    });
  };

  const fallbackResult = message => {
    movieListElement.innerHTML = '';
    movieListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  };

  searchElement.clickEvent = onButtonSearchClicked;

};


export default main;

