import movies from '../data/movies.js';

class DataSource {
  static searchMovie(keyword) {
    return new Promise((resolve, reject) => {
      const filteredMovies = movies.filter (movie => movie.name.toUpperCase().includes(keyword.toUpperCase())
      );

      if (filteredMovies.length) {
        resolve(filteredMovies);
      } else {
        reject(`${keyword} is not found`);
      }
    });
  }
}

export default DataSource;
