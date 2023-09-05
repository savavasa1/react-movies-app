import { makeAutoObservable } from "mobx";

class MoviesStore {
  movies = [];

  constructor() {
    makeAutoObservable(this);
  }

  setMovies(genreId, data) {
    this.movies[genreId] = data;
  }
}

export default new MoviesStore();
