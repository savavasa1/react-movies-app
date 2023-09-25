import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface MoviesState {
  movies: Record<number, Movie[]>
  status: "idle" | "loading" |  "succeeded" | "failed"
  error: string | null
}

interface Movie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language:string;
  original_title:string;
  overview:string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const initialState: MoviesState = {
  movies: {},
  status: "idle",
  error: null,
};

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (id: number) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?with_genres=${id}&page=1&api_key=d38aa8716411ef7d8e9054b34a6678ac`
    );

     return {id, movies: response.data.results};
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        const { id, movies } = action.payload;
        state.movies[id] = movies;
        state.error = null; 
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error?.message || null;
      });
  },
});

export default moviesSlice.reducer;
