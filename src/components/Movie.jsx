import React, { useEffect } from "react";
import "./Movie.css";

const Movie = (props) => {
  const imgURL = "https://image.tmdb.org/t/p/w500";
  const activated = props.activeMovie && props.activeRow;

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Enter" && activated) {
        props.onPopup(
          props.title,
          props.backdrop,
          props.voteAverage,
          props.overview
        );
      } else if (event.key === "Escape") {
        props.onEscape();
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
