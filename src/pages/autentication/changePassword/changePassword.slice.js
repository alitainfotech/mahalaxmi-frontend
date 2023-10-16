import { createSlice } from "@reduxjs/toolkit";

export const changeSlice = createSlice({
  name: "auth",
  initialState: {
    changeLoading: false,
    changeMessage: "",
    changeError: "",
  },
  reducers: {
    changePasswordRequest: (state) => {
      state.changeLoading = true;
      state.changeMessage = "";
    },
    changePasswordSuccess: (state, action) => {
      state.changeLoading = false;
      state.changeMessage = action.payload;
      state.changeError = "";
    },
    changePasswordError: (state, action) => {
      state.changeLoading = false;
      state.changeError = action.payload;
    },
    resetMessage: (state) => {
      state.changeMessage = "";
      state.changeError = "";
    },
  },
});

export const {
  changePasswordRequest,
  changePasswordSuccess,
  changePasswordError,
  resetMessage,
} = changeSlice.actions;

export default changeSlice.reducer;
