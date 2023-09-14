import Genres from "../assets/genres.json";
import Genre from "./Genre";
import Popup from "./Popup";
import "./Genreslist.css";
import { useState, useEffect } from "react";
import PopupStore from "./PopupStore";
import { observer } from "mobx-react-lite";

const Genreslist = observer(() => {
  const [selectedRow, setselectedRow] = useState(0);
  const [focusedMovie, setFocusedMovie] = useState(
    Array(Genres.length).fill(0)
  );
  
  const downArrowHandler = () => {
    setselectedRow((prevState) => prevState + 1);
    window.scrollTo(window.pageXOffset, window.pageYOffset + 424);
  };

  const upArrowHandler = () => {
    setselectedRow((prevState) => prevState - 1);
    window.scrollTo(window.pageXOffset, window.pageYOffset - 424);
  };

  const rightArrowHandler = () => {
    const updatedFocus = [...focusedMovie];
    updatedFocus[selectedRow]++;
    setFocusedMovie(updatedFocus);
  };

  const leftArrowHandler = () => {
    const updatedFocus = [...focusedMovie];
    updatedFocus[selectedRow]--;
    setFocusedMovie(updatedFocus);
  };

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "ArrowDown" && selectedRow < Genres.length - 1) {
        downArrowHandler();
      } else if (event.key === "ArrowUp" && selectedRow > 0) {
        upArrowHandler();
      } else if (event.key === "ArrowLeft" && focusedMovie[selectedRow] > 0) {
        leftArrowHandler();
      } else if (event.key === "ArrowRight" && focusedMovie[selectedRow] < 19) {
        rightArrowHandler();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [selectedRow, focusedMovie]);

  return (
    <div className="genres">
      {Genres.map((genre, index) => {
        return (
          <Genre
            key={genre.id}
            name={genre.name}
            id={genre.id}
            activeRow={selectedRow === index}
            activeMovie={focusedMovie[index]}
          />
        );
      })}
      {PopupStore.isOpen && <Popup />}
    </div>
  );
});

export default Genreslist;
