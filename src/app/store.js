import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import popupReducer from "../features/movies/popupSlice";
import createSagaMiddleware from "@redux-saga/core";
import moviesReducer from "../features/movies/moviesSlice"
import watchFetchMovies from "../sagas/moviesSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
      popup: popupReducer,
      movies: moviesReducer,
  },
middleware: (getDefaultMiddleware) =>
getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchFetchMovies)

export default store;
