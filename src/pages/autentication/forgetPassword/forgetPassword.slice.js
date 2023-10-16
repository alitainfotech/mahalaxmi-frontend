import { createSlice } from "@reduxjs/toolkit";

export const forgetSlice = createSlice({
  name: "auth",
  initialState: {
    forgetLoading: false,
    forgetMessage: "",
    forgetError: "",
  },
  reducers: {
    forgetPasswordRequest: (state) => {
      state.forgetLoading = true;
      state.forgetMessage = "";
    },
    forgetPasswordSuccess: (state, action) => {
      state.forgetLoading = false;
      state.forgetMessage = action.payload;
      state.forgetError = "";
    },
    forgetPasswordError: (state, action) => {
      state.forgetLoading = false;
      state.forgetError = action.payload;
    },
    resetMessage: (state) => {
      state.forgetMessage = "";
    },
  },
});

export const {
  forgetPasswordRequest,
  forgetPasswordSuccess,
  forgetPasswordError,
  resetMessage,
} = forgetSlice.actions;

export default forgetSlice.reducer;
