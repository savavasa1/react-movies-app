import React, { useEffect, useState } from "react";
import Movieslist from "./Movieslist";
import "./Genre.css";

const Genre = (props) => {
  const [movies, setMovies] = useState();

  const apiKey = import.meta.env.VITE_API_KEY;
  const fetchURL = `https://api.themoviedb.org/3/discover/movie?with_genres=${props.id}&page=1&api_key=${apiKey}`;

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(fetchURL);
      const data = await response.json();
      const fetchedMovies = data.results;

      setMovies(fetchedMovies);
    }
    fetchMovies();
  }, [fetchURL]);

  return (
    <div className="genre">
      <div className="genre-name">{props.name}</div>
      <Movieslist
        activeRow={props.activeRow}
        movies={movies}
        activeMovie={props.activeMovie}
        onPopup={props.onPopup}
        onEscape={props.onEscape}
      />
    </div>
  );
};

export default Genre;
