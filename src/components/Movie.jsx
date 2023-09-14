import React, { useEffect } from "react";
import "./Movie.css";
import { useDispatch, useSelector } from "react-redux";
import { closePopup, openPopup } from "../features/movies/popupSlice";

const Movie = (props) => {
  const imgURL = "https://image.tmdb.org/t/p/w500";
  const activated = props.focusedMovie === props.movieIndex && props.focusedRow;
  const dispatch = useDispatch();

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Enter" && activated) {
        dispatch(
          openPopup({
            title: props.title,
            backdrop: props.backdrop,
            voteAverage: props.voteAverage,
            overview: props.overview,
          })
        );
      } else if (event.key === "Escape") {
        dispatch(closePopup());
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [activated]);

  return (
    <div className="movie">
      <img
        className={`movie-poster ${activated ? `active` : ``}`}
        src={imgURL + props.posterPath}
        alt={`Poster of ${props.title}`}
        tabIndex={1}
      />
      <div className="movie-name">
        {activated && (
          <div>
            {props.title.length > 18
              ? `${props.title.slice(0, 18)}...`
              : props.title}
          </div>
        )}
      </div>
    </div>
  );
};

export default Movie;
