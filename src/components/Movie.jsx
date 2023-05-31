import React, { useState, useEffect } from "react";
import Popup from "./Popup";

const Movie = (props) => {
  const [popup, setPopup] = useState(false);
  const imgURL = "https://image.tmdb.org/t/p/w500";
  const activated = props.activeMovie && props.activeRow;

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Enter" && activated) {
        setPopup(true);
      } else if (event.key === "Escape") {
        setPopup(false);
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [activated]);

  return (
    <div className="min-w-[16vw] ">
      <img
        className={`w-[150px] min-w-[150px] min-h-[100px] ${
          activated ? `border-4 border-[#E50914] p-0.5` : ``
        }`}
        src={imgURL + props.posterPath}
        alt={imgURL + props.title}
        tabIndex={1}
      />
      {activated && <div className="max-w-[150px] object-contain h-[100px]">{props.title}</div>}
      {popup && (
        <Popup
          image={imgURL + props.backdrop}
          title={props.title}
          voteAverage={props.voteAverage}
          overview={props.overview}
        />
      )}
    </div>
  );
};

export default Movie;
