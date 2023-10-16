import { createSlice } from "@reduxjs/toolkit";

export const resetSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    message: "",
    error: "",
  },
  reducers: {
    checkResetTokenRequest: (state) => {
      state.loading = true;
      state.message = "";
    },
    checkResetTokenSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    checkResetTokenError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    resetPasswordRequest: (state) => {
      state.resetLoading = true;
      state.resetMessage = "";
    },
    resetPasswordSuccess: (state, action) => {
      state.resetLoading = false;
      state.resetMessage = action.payload;
      state.resetError = "";
    },
    resetPasswordError: (state, action) => {
      state.resetLoading = false;
      state.resetError = action.payload;
    },
    resetState: (state) => {
      state.message = "";
      state.error = "";
      state.resetError = "";
      state.resetMessage = "";
    },
  },
});

export const {
  checkResetTokenRequest,
  checkResetTokenSuccess,
  checkResetTokenError,
  resetPasswordRequest,
  resetPasswordSuccess,
  resetPasswordError,
  resetState,
} = resetSlice.actions;

export default resetSlice.reducer;
