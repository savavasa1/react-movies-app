import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import popupReducer from "../features/movies/popupSlice";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
      popup: popupReducer,
  },
middleware: (getDefaultMiddleware) =>
getDefaultMiddleware().concat(sagaMiddleware),
});


export default store;
