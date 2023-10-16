import loginSlice from "../pages/autentication/login/login.slice";
import forgetSlice from "../pages/autentication/forgetPassword/forgetPassword.slice";
import resetSlice from "../pages/autentication/resetPassword/reset.slice";
import layoutSlice from "../pages/layout/layout.slice";
import changePasswordSlice from "../pages/autentication/changePassword/changePassword.slice";
import userSlice from "../pages/profile/profile.slice";
import logoutSlice from "../pages/autentication/logout/logout.slice";
import bankSlice from "../pages/Settings/Bank/bankSlice";

const { configureStore } = require("@reduxjs/toolkit");
const { ENV_PRODUCTION, ENV_DEVELOPMENT } = require("./constants");

function configStore() {
  const currentEnv = process.env.REACT_APP_ENV || ENV_DEVELOPMENT;
  const store = configureStore({
    reducer: {
      login: loginSlice,
      forget: forgetSlice,
      reset: resetSlice,
      layout: layoutSlice,
      changePass: changePasswordSlice,
      profile: userSlice,
      logout: logoutSlice,
      bank: bankSlice,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
    devTools: currentEnv !== ENV_PRODUCTION,
  });
  return store;
}

export default configStore;
