import {
  updateProfileDetailsError,
  updateProfileDetailsRequest,
  updateProfileDetailsSuccess,
  updateProfileImageError,
  updateProfileImageRequest,
  updateProfileImageSuccess,
} from "./profile.slice";
import UserService from "./services";

export function updateProfileDetails(payload) {
  return (dispatch) => {
    dispatch(updateProfileDetailsRequest());
    UserService.updateProfileDetails(payload)
      .then((response) => {
        const { status, data, message, error } = response.data;
        if (status === 1) {
          dispatch(updateProfileDetailsSuccess({ data, message }));
        } else {
          dispatch(updateProfileDetailsError(error));
        }
      })
      .catch((error) => {
        dispatch(updateProfileDetailsError(error));
      });
  };
}

export function updateProfileImage(payload) {
  return (dispatch) => {
    dispatch(updateProfileImageRequest());
    UserService.updateProfileImage(payload)
      .then((response) => {
        const { status, data, message, error } = response.data;
        if (status === 1) {
          dispatch(updateProfileImageSuccess({ data, message }));
        } else {
          dispatch(updateProfileImageError(error));
        }
      })
      .catch((error) => {
        dispatch(updateProfileImageError(error));
      });
  };
}
