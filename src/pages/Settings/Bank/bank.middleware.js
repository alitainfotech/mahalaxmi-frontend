import bankDetailsService from "./bankService";
import {
  addBankDetailError,
  addBankDetailsRequest,
  addBankDetailsSuccess,
  allBankDetailError,
  allBankDetailsRequest,
  allBankDetailsSuccess,
  deleteBankDetailError,
  deleteBankDetailsRequest,
  deleteBankDetailsSuccess,
  getOneBankDetailError,
  getOneBankDetailsRequest,
  getOneBankDetailsSuccess,
  updateBankDetailError,
  updateBankDetailsRequest,
  updateBankDetailsSuccess,
} from "./bankSlice";

export function getAllBankDeatails() {
  return (dispatch) => {
    dispatch(allBankDetailsRequest());
    bankDetailsService
      .allBankDetail()
      .then((response) => {
        const { status, data, error } = response.data;
        if (status === 1) {
          dispatch(allBankDetailsSuccess(data));
        } else {
          dispatch(allBankDetailError(error));
        }
      })
      .catch((error) => {
        dispatch(allBankDetailError(error));
      });
  };
}

export function addBankUserDetails(payload) {
  return (dispatch) => {
    dispatch(addBankDetailsRequest());
    bankDetailsService
      .addBank(payload)
      .then((response) => {
        const { status, message, error } = response.data;
        if (status === 1) {
          dispatch(addBankDetailsSuccess(message));
        } else {
          dispatch(addBankDetailError(error));
        }
      })
      .catch((error) => {
        dispatch(addBankDetailError(error));
      });
  };
}

export function getOneBankDetail(bank_id) {
  return (dispatch) => {
    dispatch(getOneBankDetailsRequest());
    bankDetailsService
      .getOneBank(bank_id)
      .then((response) => {
        const { status, data, error } = response.data;
        if (status === 1) {
          dispatch(getOneBankDetailsSuccess(data));
        } else {
          dispatch(getOneBankDetailError(error));
        }
      })
      .catch((error) => {
        dispatch(getOneBankDetailError(error));
      });
  };
}

export function getUpdateBankDetail(bank_id, payload) {
  return (dispatch) => {
    dispatch(updateBankDetailsRequest());
    bankDetailsService
      .updateBank(bank_id, payload)
      .then((response) => {
        const { status, message, error } = response.data;
        if (status === 1) {
          dispatch(updateBankDetailsSuccess(message));
        } else {
          dispatch(updateBankDetailError(error));
        }
      })
      .catch((error) => {
        dispatch(updateBankDetailError(error));
      });
  };
}

export function getDeleteBankDetail(bank_id) {
  return (dispatch) => {
    dispatch(deleteBankDetailsRequest());
    bankDetailsService
      .deleteBank(bank_id)
      .then((response) => {
        const { status, message, error } = response.data;
        if (status === 1) {
          dispatch(deleteBankDetailsSuccess(message));
        } else {
          dispatch(deleteBankDetailError(error));
        }
      })
      .catch((error) => {
        dispatch(deleteBankDetailError(error));
      });
  };
}
