import React from "react";
import { FaStar } from "react-icons/fa";
import './Popup.css'
import { useDispatch, useSelector } from "react-redux";

const Popup = (props) => {
  const {isOpen, title, backdrop, voteAverage, overview} = useSelector((state) => state.popup);
  const dispatch = useDispatch();

  const imgURL = `https://image.tmdb.org/t/p/w500${backdrop}`;

  return (
    <div className="popup-background">
      <div className="popup-container">
        <div style={{position: "relative"}}>
          <img className="popup-image" src={imgURL} />
          <div className="popup-rating">
            <FaStar className="star-color" />
            <div>{voteAverage}/10</div>
          </div>
        </div>
        <div className="popup-title">{title}</div>
        <div className=" popup-text">{overview}</div>
      </div>
    </div>
  );
};

export default Popup;
