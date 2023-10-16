import { postFormData, put } from "..";

const URI = "/users";

const updateProfileDetails = (payload) => {
  const URL = `${URI}/update`;
  return put(URL, payload);
};

const updateProfileImage = (payload) => {
  const URL = `${URI}/image/upload`;
  return postFormData(URL, payload);
};

const UserService = {
  updateProfileDetails,
  updateProfileImage,
};
export default UserService;
