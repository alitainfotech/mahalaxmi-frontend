import { createSlice } from "@reduxjs/toolkit";

export const logoutSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    message: "",
    error: "",
  },
  reducers: {
    logoutUserRequest: (state) => {
      state.loading = true;
      state.message = "";
    },
    logoutUserSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
      state.error = "";
    },
    logoutUserError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    resetMessage: (state) => {
      state.message = "";
      state.error = "";
    },
  },
});

export const {
  logoutUserRequest,
  logoutUserSuccess,
  logoutUserError,

  resetMessage,
} = logoutSlice.actions;

export default logoutSlice.reducer;
