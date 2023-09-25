import { FaStar } from "react-icons/fa";
import './Popup.css'
import { useAppSelector } from "../app/hooks";

const Popup = () => {
  const {title, backdrop, voteAverage, overview} = useAppSelector((state) => state.popup);

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
