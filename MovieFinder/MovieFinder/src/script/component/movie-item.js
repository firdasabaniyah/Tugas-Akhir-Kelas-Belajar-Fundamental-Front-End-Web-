class MovieItem extends HTMLElement {
    constructor() {
      super();
      this.shadowDOM = this.attachShadow({ mode: "open" });
    }
  
    set movie(movie) {
      this._movie = movie;
      this.render();
    }
  
    render() {
      this.shadowDOM.innerHTML = `
        <style>
          
        * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
  :host{
    margin-bottom: 18px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    overflow: hidden;
  }
  .fan-art-club {
    width: 100%;
    max-height: 300px;
    object-fit: cover;
    object-position: center;
  }
  .club-info {
    padding: 24px;
  }
  .club-info>h2 {
    font-weight: lighter;
  }
  .club-info>p {
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 10;
    /* number of lines to show */
  }
        </style>
        <img class="fan-art-club" src="${this._movie.strTeamBadge}" alt="Fan Art">
          <div class="movie-info">
            <h2>${this._movie.strTeam}</h2>
            <p>${this._movie.strDescriptionEN}</p>
          </div>
          `;
    }
  }
  
  customElements.define("movie-item", MovieItem);