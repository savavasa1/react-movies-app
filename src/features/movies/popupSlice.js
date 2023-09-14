import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  title: "",
  backdrop: "",
  voteAverage: "",
  overview: "",
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    openPopup: (state, action) => {
      state.isOpen = true;
      state.title = action.payload.title;
      state.backdrop = action.payload.backdrop;
      state.voteAverage = action.payload.voteAverage;
      state.overview = action.payload.overview;
    },
    closePopup: (state) => {
      state.isOpen = false;
      state.title = '';
      state.backdrop = '';
      state.voteAverage = '';
      state.overview = '';
    },
  },
});

export const { openPopup, closePopup } = popupSlice.actions;
export default popupSlice.reducer;
