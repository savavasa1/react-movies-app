import { useState, useEffect, useRef } from "react";
import Movie from "./Movie";
import { fetchMovies } from "../features/movies/moviesSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";

const Movieslist = ({focusedRow, id}: {focusedRow: boolean, id: number}) => {
  const [horizontalOffset, setHorizontalOffset] = useState(0);
  const rowRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();
  const movies = useAppSelector((state) => state.movies.movies[id]);
  const [focusedMovie, setFocusedMovie] = useState(0);

  useEffect(() => {
    if (focusedMovie < movies?.length - 8 && focusedRow)

    setHorizontalOffset(219 * focusedMovie)
   // setHorizontalOffset(props.focusedRow && Math.min(Math.max(focusedMovie * 219, 0), 2559));
  }, [focusedMovie, focusedRow, movies]);

  useEffect(() => {
    dispatch(fetchMovies(id));
  }, [dispatch, id]);

  const rightArrowHandler = () => {
    setFocusedMovie((prevState) => prevState + 1);
  };

  const leftArrowHandler = () => {
    setFocusedMovie((prevState) => prevState - 1);
  };

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
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
      {movies?.map((movie, index: number) => {
        return (
          <div key={movie.id}>
            <Movie
              title={movie.title}
              posterPath={movie.poster_path}
              backdrop={movie.backdrop_path}
              movieIndex={index}
              focusedMovie={focusedMovie}
              focusedRow={focusedRow}
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
