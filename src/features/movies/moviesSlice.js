import { createSlice } from "@reduxjs/toolkit";
import {
  FETCH_MOVIES_START,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_SUCCESS,
} from "./actionTypes";

const initialState = { movies: [], loading: false, error: null };

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    fetchMoviesStart: (state, action) => {
      switch (action.type) {
        case FETCH_MOVIES_START: {
          state.loading = true;
        }
        case FETCH_MOVIES_SUCCESS: {
          state.loading = false;
          state.movies = action.payload;
        }
        case FETCH_MOVIES_FAILURE: {
          state.error = action.payload;
          state.loading = false;
        }
      }
    },
  },
});

export const { fetchMoviesFailure, fetchMoviesSuccess, fetchMoviesStart } = moviesSlice.actions;
export default moviesSlice.reducer;
