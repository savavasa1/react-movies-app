import React, { useEffect } from "react";
import Movieslist from "./Movieslist";
import "./Genre.css";
import MoviesStore from "./MoviesStore";
import { observer } from "mobx-react-lite";
import axios from "axios";

const Genre = observer((props) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const fetchURL = `https://api.themoviedb.org/3/discover/movie?with_genres=${props.id}&page=1&api_key=${apiKey}`;

  useEffect(() => {
    async function fetchMovies() {
      const response = await axios.get(fetchURL);
      const movies = await response.data.results;
      MoviesStore.setMovies(props.id, movies);
    }
    fetchMovies();
  }, [fetchURL]);

  return (
    <div className="genre">
      <div className="genre-name">{props.name}</div>
      <Movieslist
        activeRow={props.activeRow}
        activeMovie={props.activeMovie}
        id={props.id}
      />
    </div>
  );
});

export default Genre;
