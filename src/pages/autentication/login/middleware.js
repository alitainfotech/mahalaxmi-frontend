import { loginError, loginRequest, loginSuccess } from "./login.slice";
import LocalstorageService from "../../../helper/localstorage-services";
import AuthService from "./service";

export function loginUser(payload) {
  return (dispatch) => {
    dispatch(loginRequest());
    AuthService.login(payload)
      .then((response) => {
        const { status, data, message, error } = response.data;
        if (status === 1) {
          LocalstorageService.loginUser(data);
          dispatch(loginSuccess({ ...data, message }));
        } else {
          dispatch(loginError(error));
        }
      })
      .catch((error) => {
        dispatch(loginError(error));
      });
  };
}
