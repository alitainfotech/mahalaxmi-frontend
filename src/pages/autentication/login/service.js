import { post } from "../..";

const URI = "/auth";

const login = (payload) => {
  const URL = `${URI}/login`;
  return post(URL, payload);
};

const AuthService = {
  login,
};
export default AuthService;
