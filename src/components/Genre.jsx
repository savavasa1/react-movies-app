import React, { useEffect, useState } from "react";
import Movieslist from "./Movieslist";
import "./Genre.css";
import axios from "axios";
import { useRecoilState } from "recoil";
import { MoviesState } from "./MoviesState";

const Genre = (props) => {
  const [movies, setMovies] = useRecoilState(MoviesState)
  const apiKey = import.meta.env.VITE_API_KEY;
  const fetchURL = `https://api.themoviedb.org/3/discover/movie?with_genres=${props.id}&page=1&api_key=${apiKey}`;

  useEffect(() => {
    async function fetchMovies() {
      const response = await axios.get(fetchURL);
      const data = await response.data.results;
      console.log(data)
      setMovies((prevMovies) => ({...prevMovies, [props.id]: data}));
      console.log(movies)
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
        id={props.id}
      />
    </div>
  );
};

export default Genre;
