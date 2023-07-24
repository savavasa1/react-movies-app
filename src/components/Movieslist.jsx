import React, { useState, useEffect, useRef } from "react";
import Movie from "./Movie";

const Movieslist = (props) => {
  const [horizontalOffset, setHorizontalOffset] = useState(0);
  const rowRef = useRef();

  useEffect(() => {
    setHorizontalOffset(Math.min(Math.max(props.activeMovie * 219, 0), 2559));
  }, [props.activeMovie]);


  return (
    <div
      ref={rowRef}
      style={{
        display: "flex",
        transform: `translateX(${-horizontalOffset}px)`,
      }}
    >
      {props.movies?.map((movie, index) => {
        return (
          <div key={movie.id}>
            <Movie
              title={movie.title}
              posterPath={movie.poster_path}
              backdrop={movie.backdrop_path}
              activeMovie={props.activeMovie === index}
              movieId={movie.id}
              activeRow={props.activeRow}
              voteAverage={movie.vote_average}
              overview={movie.overview}
              onPopup={props.onPopup}
              onEscape={props.onEscape}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Movieslist;
