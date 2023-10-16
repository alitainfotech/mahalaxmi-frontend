import AuthService from "./service";
import {
  changePasswordRequest,
  changePasswordSuccess,
  changePasswordError,
} from "./changePassword.slice";

export function changePassword(payload) {
  return (dispatch) => {
    dispatch(changePasswordRequest());
    AuthService.changePassword(payload)
      .then((response) => {
        const { status, message, error } = response.data;
        if (status === 1) {
          dispatch(changePasswordSuccess(message));
        } else {
          dispatch(changePasswordError(error));
        }
      })
      .catch((error) => {
        dispatch(changePasswordError(error));
      });
  };
}
