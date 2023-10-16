import {
  checkResetTokenError,
  checkResetTokenRequest,
  checkResetTokenSuccess,
  resetPasswordError,
  resetPasswordRequest,
  resetPasswordSuccess,
} from "./reset.slice";
import AuthService from "./service";

export function checkResetToken(payload) {
  return (dispatch) => {
    dispatch(checkResetTokenRequest());
    AuthService.checkResetToken(payload)
      .then((response) => {
        const { status, message, error } = response.data;
        if (status === 1) {
          dispatch(checkResetTokenSuccess(message));
        } else {
          dispatch(checkResetTokenError(error));
        }
      })
      .catch((error) => {
        dispatch(checkResetTokenError(error));
      });
  };
}

export function resetPassword(payload) {
  return (dispatch) => {
    dispatch(resetPasswordRequest());
    AuthService.resetPassword(payload)
      .then((response) => {
        const { status, message, error } = response.data;
        if (status === 1) {
          dispatch(resetPasswordSuccess(message));
        } else {
          dispatch(resetPasswordError(error));
        }
      })
      .catch((error) => {
        dispatch(resetPasswordError(error));
      });
  };
}
