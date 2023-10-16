import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    message: "",
    error: "",
  },
  reducers: {
    updateProfileDetailsRequest: (state) => {
      state.loading = true;
      state.message = "";
    },
    updateProfileDetailsSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
      state.error = "";
      const userObj = JSON.parse(localStorage.getItem("user-details"));
      userObj.first_name = action.payload.data.first_name;
      userObj.last_name = action.payload.data.last_name;
      userObj.phone_number = action.payload.data.phone_number;
      localStorage.setItem("user-details", JSON.stringify(userObj));
    },
    updateProfileDetailsError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateProfileImageRequest: (state) => {
      state.loading = true;
      state.message = "";
    },
    updateProfileImageSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
      state.error = "";
      const userObj = JSON.parse(localStorage.getItem("user-details"));
      userObj.profile_image = action.payload.data.profile_image;
      localStorage.setItem("user-details", JSON.stringify(userObj));
    },
    updateProfileImageError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    resetMessage: (state) => {
      state.message = "";
    },
  },
});

export const {
  updateProfileDetailsRequest,
  updateProfileDetailsSuccess,
  updateProfileDetailsError,

  updateProfileImageRequest,
  updateProfileImageSuccess,
  updateProfileImageError,

  resetMessage,
} = userSlice.actions;

export default userSlice.reducer;
