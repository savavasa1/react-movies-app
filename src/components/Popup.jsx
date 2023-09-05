import React from "react";
import { FaStar } from "react-icons/fa";
import './Popup.css'
import { useRecoilValue } from "recoil";
import { popupState } from "./PopupState";

const Popup = (props) => {

  const popup = useRecoilValue(popupState);

  const imgURL = `https://image.tmdb.org/t/p/w500${popup.backdrop}`; 
  return (
    <div className="popup-background">
      <div className="popup-container">
        <div style={{position: "relative"}}>
          <img className="popup-image" src={imgURL} />
          <div className="popup-rating">
            <FaStar className="star-color" />
            <div>{popup.voteAverage}/10</div>
          </div>
        </div>
        <div className="popup-title">{popup.title}</div>
        <div className=" popup-text">{popup.overview}</div>
      </div>
    </div>
  );
};

export default Popup;
