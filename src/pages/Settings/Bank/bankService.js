import { get, post, put } from "../..";

const URI = "/bank";

const allBankDetail = () => {
  const URL = `${URI}/getAllBank`;
  return get(URL);
};

const addBank = (payload) => {
  const URL = `${URI}/addBank`;
  return post(URL, payload);
};

const getOneBank = (bank_id) => {
  const URL = `${URI}/${bank_id}`;
  return get(URL);
};

const deleteBank = (bank_id) => {
  const URL = `${URI}/deleteBank/${bank_id}`;
  return put(URL);
};

const updateBank = (bank_id, payload) => {
  const URL = `${URI}/updateBank/${bank_id}`;
  return put(URL, payload);
};

const bankDetailsService = {
  allBankDetail,
  addBank,
  getOneBank,
  deleteBank,
  updateBank,
};
export default bankDetailsService;
