import React, { useEffect } from "react";
import "./Movie.css";
import { useRecoilState } from "recoil";
import { popupState } from "./PopupState";

const Movie = (props) => {
  const imgURL = "https://image.tmdb.org/t/p/w500";
  const activated = props.activeMovie && props.activeRow;
  const [popup, setPopup] = useRecoilState(popupState)

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Enter" && activated) {
        const popupData = {
          isShown: true,
          title: props.title,
          backdrop: props.backdrop,
          voteAverage: props.voteAverage,
          overview: props.overview        
        };
        setPopup(popupData)
      } else if (event.key === "Escape" && activated) {
        const popupData = {
          isShown: false,
          title: '',
          backdrop: '',
          voteAverage: '',
          overview: ''
        }
        setPopup(popupData)
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
