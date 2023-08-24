import Genres from "../assets/genres.json";
import Genre from "./Genre";
import Popup from "./Popup";
import "./Genreslist.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";


const Genreslist = () => {
  const [focusedRow, setFocusedRow] = useState(0);
  const popup = useSelector((state) => state.popup.isOpen);

  const downArrowHandler = () => {
    setFocusedRow((prevState) => prevState + 1);
    window.scrollTo(window.pageXOffset, window.pageYOffset + 424);
  };

  const upArrowHandler = () => {
    setFocusedRow((prevState) => prevState - 1);
    window.scrollTo(window.pageXOffset, window.pageYOffset - 424);
  };

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "ArrowDown" && focusedRow < Genres.length - 1) {
        downArrowHandler();
      } else if (event.key === "ArrowUp" && focusedRow > 0) {
        upArrowHandler();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [focusedRow]);

  return (
    <div className="genres">
      {Genres.map((genre, index) => {
        return (
          <Genre
            key={genre.id}
            name={genre.name}
            id={genre.id}
            focusedRow={focusedRow === index}
          />
        );
      })}
      {popup && <Popup />}
    </div>
  );
};

export default Genreslist;
