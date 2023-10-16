import AuthService from "./service";
import {
  forgetPasswordRequest,
  forgetPasswordSuccess,
  forgetPasswordError,
} from "./forgetPassword.slice";

export function forgetPassword(payload) {
  return (dispatch) => {
    dispatch(forgetPasswordRequest());
    AuthService.forgetPassword(payload)
      .then((response) => {
        const { status, message, error } = response.data;
        if (status === 1) {
          dispatch(forgetPasswordSuccess(message));
        } else {
          dispatch(forgetPasswordError(error));
        }
      })
      .catch((error) => {
        dispatch(forgetPasswordError(error));
      });
  };
}
