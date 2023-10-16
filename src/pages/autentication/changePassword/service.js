import { post } from "../..";

const URI = "/auth";

const changePassword = (payload) => {
  const URL = `${URI}/change-password`;
  return post(URL, payload);
};

const AuthService = {
  changePassword,
};
export default AuthService;
