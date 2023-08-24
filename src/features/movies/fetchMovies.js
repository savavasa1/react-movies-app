import { FETCH_MOVIES_FAILURE, FETCH_MOVIES_START, FETCH_MOVIES_SUCCESS } from "./actionTypes";

export const fetchMoviesStart = () => ({type: FETCH_MOVIES_START})
export const fetchMoviesSuccess = (payload) => ({type: FETCH_MOVIES_SUCCESS}, payload)
export const fetchMoviesFailure = (payload) => ({type: FETCH_MOVIES_FAILURE}, payload)