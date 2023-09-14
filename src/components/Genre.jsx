import React, { useEffect } from "react";
import Movieslist from "./Movieslist";
import "./Genre.css";
import { observer } from "mobx-react-lite";

const Genre = observer((props) => {
  
  return (
    <div className="genre">
      <div className="genre-name">{props.name}</div>
      <Movieslist
        activeRow={props.activeRow}
        activeMovie={props.activeMovie}
        id={props.id}
      />
    </div>
  );
});

export default Genre;
