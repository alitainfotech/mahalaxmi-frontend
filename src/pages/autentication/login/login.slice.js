import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "auth",
  initialState: {
    loginLoading: false,
    loggedInUser: null,
    loginMessage: "",
    loginError: "",
  },
  reducers: {
    loginRequest: (state) => {
      state.loginLoading = true;
      state.loginMessage = "";
    },
    loginSuccess: (state, action) => {
      state.loginLoading = false;
      state.loggedInUser = action.payload.userObj;
      state.loginMessage = action.payload.message;
      state.loginError = "";
    },
    loginError: (state, action) => {
      state.loginLoading = false;
      state.loginError = action.payload;
    },
    resetMessage: (state) => {
      state.loginMessage = "";
      state.loginError = "";
    },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginError,

  resetMessage,
} = loginSlice.actions;

export default loginSlice.reducer;
