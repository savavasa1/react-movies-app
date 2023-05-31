import React, { useState, useEffect } from "react";
import Movie from "./Movie";

const Movieslist = (props) => {
  const [activeMovie, setActiveMovie] = useState(0);

  const rightArrowHandler = () => {
    setActiveMovie((prevState) => prevState + 1);
    window.scrollTo(window.pageXOffset + 42, window.pageYOffset);
  };

  const leftArrowHandler = () => {
    setActiveMovie((prevState) => prevState - 1);
    window.scrollTo(window.pageXOffset - 42, window.pageYOffset);
  };

   useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "ArrowRight" && activeMovie < props.movies.length - 1) {
        rightArrowHandler();
      } else if (event.key === "ArrowLeft" && activeMovie > 0) {
        leftArrowHandler();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [props.movies, activeMovie]);

  return (
    <div className="flex">
      {props.movies?.map((movie, index) => {
        return (
          <div className="m-1 w-[200px] flex-none" key={movie.id}>
            <Movie
              title={movie.title}
              posterPath={movie.poster_path}
              backdrop={movie.backdrop_path}
              activeMovie={activeMovie === index}
              movieId={movie.id}
              activeRow={props.activeRow}
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
