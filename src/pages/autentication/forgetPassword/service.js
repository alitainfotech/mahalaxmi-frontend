import { post } from "../..";

const URI = "/auth";

const forgetPassword = (payload) => {
  const URL = `${URI}/forgotPassword`;
  return post(URL, payload);
};

const AuthService = {
  forgetPassword,
};
export default AuthService;
