import { post } from "../..";

const URI = "/auth";

const checkResetToken = (payload) => {
  const URL = `${URI}/check-reset-password`;
  return post(URL, payload);
};

const resetPassword = (payload) => {
  const URL = `${URI}/resetPassword`;
  return post(URL, payload);
};

const AuthService = {
  checkResetToken,
  resetPassword,
};
export default AuthService;
