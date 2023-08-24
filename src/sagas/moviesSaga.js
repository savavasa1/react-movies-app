import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { fetchMoviesSuccess, fetchMoviesFailure} from "../features/movies/moviesSlice";

function* fetchMoviesSaga() {
  try {
    const response = yield call(
      axios.get,
      'https://api.themoviedb.org/3/discover/movie?with_genres=28&page=1&api_key=d38aa8716411ef7d8e9054b34a6678ac'
    );
    const movies = response.data;

    yield put(fetchMoviesSuccess(movies));
  } catch (error) {
    yield put(fetchMoviesFailure(error.message));
  }
}

function* watchFetchMovies() {
  yield takeEvery('movies/fetchMoviesStart', fetchMoviesSaga);
}

export default watchFetchMovies;
