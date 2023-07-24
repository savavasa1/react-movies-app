import React from "react";
import { FaStar } from "react-icons/fa";
import './Popup.css'

const Popup = (props) => {
  return (
    <div className="popup-background">
      <div className="popup-container">
        <div style={{position: "relative"}}>
          <img className="popup-image" src={props.image} />
          <div className="popup-rating">
            <FaStar className="star-color" />
            <div>{props.voteAverage}/10</div>
          </div>
        </div>
        <div className="popup-title">{props.title}</div>
        <div className=" popup-text">{props.overview}</div>
      </div>
    </div>
  );
};

export default Popup;
