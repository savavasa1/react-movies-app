import React, { useState, useEffect, useRef } from "react";
import Movie from "./Movie";
import fetchMovies from './fetchMovies'
import { observer } from "mobx-react-lite";
import { useQuery } from "@tanstack/react-query";

const Movieslist = observer((props) => {
  const [horizontalOffset, setHorizontalOffset] = useState(0);
  const rowRef = useRef();
  const { data } = useQuery({
    queryKey: ["movies", props.id],
    queryFn: fetchMovies,
  });

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
      {data?.results.map((movie, index) => {
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
            />
          </div>
        );
      })}
    </div>
  );
});

export default Movieslist;
