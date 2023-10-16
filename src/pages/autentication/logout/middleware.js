import AuthService from "./service";
import {
  logoutUserRequest,
  logoutUserSuccess,
  logoutUserError,
} from "./logout.slice";

export function logoutUser() {
  return (dispatch) => {
    dispatch(logoutUserRequest());
    AuthService.logoutUser()
      .then((response) => {
        const { status, message, error } = response.data;
        if (status === 1) {
          dispatch(logoutUserSuccess(message));
        } else {
          dispatch(logoutUserError(error));
        }
      })
      .catch((error) => {
        dispatch(logoutUserError(error));
      });
  };
}
