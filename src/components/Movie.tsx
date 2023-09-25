import { useEffect } from "react";
import "./Movie.css";
import { useDispatch} from "react-redux";
import { closePopup, openPopup } from "../features/movies/popupSlice";

const Movie = ({
  focusedMovie,
  movieIndex,
  focusedRow,
  title,
  backdrop,
  voteAverage,
  overview,
  posterPath,
}: {
  focusedMovie: number;
  movieIndex: number;
  focusedRow: boolean;
  title: string;
  backdrop: string;
  voteAverage: number;
  overview: string;
  posterPath: string;
}) => {
  const imgURL = "https://image.tmdb.org/t/p/w500";
  const activated = focusedMovie === movieIndex && focusedRow;
  const dispatch = useDispatch();

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === "Enter" && activated) {
        dispatch(
          openPopup({
            title: title,
            backdrop: backdrop,
            voteAverage: voteAverage,
            overview: overview,
          })
        );
      } else if (event.key === "Escape") {
        dispatch(closePopup());
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [activated]);

  return (
    <div className="movie">
      <img
        className={`movie-poster ${activated ? `active` : ``}`}
        src={imgURL + posterPath}
        alt={`Poster of ${title}`}
        tabIndex={1}
      />
      <div className="movie-name">
        {activated && (
          <div>
            {title.length > 18
              ? `${title.slice(0, 18)}...`
              : title}
          </div>
        )}
      </div>
    </div>
  );
};

export default Movie;
