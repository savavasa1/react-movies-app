import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/movies/moviesSlice";
import popupSlice from "../features/movies/popupSlice";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    popup: popupSlice
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
