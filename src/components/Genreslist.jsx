import Genres from "../assets/genres.json";
import Genre from "./Genre";
import { useState, useEffect } from "react";

const Genreslist = () => {
  const [selectedRow, setselectedRow] = useState(0);

  const downArrowHandler = () => {
    setselectedRow((prevState) => prevState + 1);
    window.scrollTo(
      window.pageXOffset,
      window.pageYOffset + window.innerHeight * 0.35
    );
  };

  const upArrowHandler = () => {
    setselectedRow((prevState) => prevState - 1);
    window.scrollTo(
      window.pageXOffset,
      window.pageYOffset - window.innerHeight * 0.38
    );
  };

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "ArrowDown" && selectedRow < Genres.length - 1) {
        downArrowHandler();
      } else if (event.key === "ArrowUp" && selectedRow > 0) {
        upArrowHandler();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [selectedRow]);

  return (
    <div className="my-5 mt-[70px] text-lg bg-[#0F1626] text-[#F5F5F5]">
      {Genres.map((genre, index) => {
        return (
          <Genre
            key={genre.id}
            name={genre.name}
            id={genre.id}
            activeRow={selectedRow === index}
          />
        );
      })}
    </div>
  );
};

export default Genreslist;
