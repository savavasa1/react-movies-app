import React, { useState, useEffect, useRef } from "react";
import Movie from "./Movie";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import fetchMovies from '../features/movies/fetchMovies'

const Movieslist = (props) => {
  const [horizontalOffset, setHorizontalOffset] = useState(0);
  const rowRef = useRef();
  const dispatch = useDispatch();
  const [focusedMovie, setFocusedMovie] = useState(0);
  const { data } = useQuery({
    queryKey: ["movies", props.id],
    queryFn: fetchMovies,
  });

  useEffect(() => {
    if (focusedMovie < data?.results.length - 8)
      setHorizontalOffset(props.focusedRow && 219 * focusedMovie);
  }, [focusedMovie, props.focusedRow, data]);

  const rightArrowHandler = () => {
    setFocusedMovie((prevState) => prevState + 1);
  };

  const leftArrowHandler = () => {
    setFocusedMovie((prevState) => prevState - 1);
  };

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "ArrowLeft" && focusedMovie > 0) {
        leftArrowHandler();
      } else if (event.key === "ArrowRight" && focusedMovie < 19) {
        rightArrowHandler();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [focusedMovie]);

  return (
    <div
      ref={rowRef}
      style={{
        display: "flex",
        transform: `translateX(${-horizontalOffset}px)`,
      }}
    >
      {data?.results.map((movie, index) => {
        return (
          <div key={movie.id}>
            <Movie
              title={movie.title}
              posterPath={movie.poster_path}
              backdrop={movie.backdrop_path}
              movieIndex={index}
              focusedMovie={focusedMovie}
              focusedRow={props.focusedRow}
              voteAverage={movie.vote_average}
              overview={movie.overview}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Movieslist;
