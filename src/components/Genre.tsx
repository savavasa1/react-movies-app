import Movieslist from "./Movieslist";
import "./Genre.css";

const Genre = ({name, id, focusedRow}: {name: string, id: number, focusedRow: boolean }) => {
  return (
    <div className="genre">
      <div className="genre-name">{name}</div>
      <Movieslist focusedRow={focusedRow} id={id} />
    </div>
  );
};

export default Genre;
