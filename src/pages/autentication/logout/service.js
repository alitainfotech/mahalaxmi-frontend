import { get } from "../..";

const URI = "auth";

const logoutUser = () => {
  const URL = `${URI}/logout`;
  return get(URL);
};

const AuthService = {
  logoutUser,
};

export default AuthService;
