import React, { useEffect, useState } from "react";
import Movieslist from "./Movieslist";
import "./Genre.css";

const Genre = (props) => {
  return (
    <div className="genre">
      <div className="genre-name">{props.name}</div>
      <Movieslist focusedRow={props.focusedRow} id={props.id} />
    </div>
  );
};

export default Genre;
