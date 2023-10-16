import { createSlice } from "@reduxjs/toolkit";

export const allBankDetailsSlice = createSlice({
  name: "bank",
  initialState: {
    allBankDetailLoading: true,
    allBankDetails: [],
    allBankDetailError: "",

    addBankDetailLoading: false,
    addBankDetails: "",
    addBankDetailError: "",

    deleteBankDetailLoading: false,
    deleteBankDetails: "",
    deleteBankDetailError: "",

    oneBankDetailLoading: false,
    oneBankDetails: null,
    oneBankDetailError: "",

    updateBankDetailLoading: false,
    updateBankDetails: "",
    updateBankDetailError: "",
  },
  reducers: {
    allBankDetailsRequest: (state) => {
      state.allBankDetailLoading = true;
      state.allBankDetailError = "";
    },
    allBankDetailsSuccess: (state, action) => {
      state.allBankDetails = action.payload;
      state.allBankDetailLoading = false;
    },
    allBankDetailError: (state, action) => {
      state.allBankDetailError = action.payload;
      state.allBankDetailLoading = false;
    },

    addBankDetailsRequest: (state) => {
      state.addBankDetailLoading = true;
      state.addBankDetailError = "";
    },
    addBankDetailsSuccess: (state, action) => {
      state.addBankDetails = action.payload;
      state.addBankDetailLoading = false;
    },
    addBankDetailError: (state, action) => {
      state.addBankDetailError = action.payload;
      state.addBankDetailLoading = false;
    },

    deleteBankDetailsRequest: (state) => {
      state.deleteBankDetailLoading = true;
      state.deleteBankDetailError = "";
    },
    deleteBankDetailsSuccess: (state, action) => {
      state.deleteBankDetails = action.payload;
      state.deleteBankDetailLoading = false;
    },
    deleteBankDetailError: (state, action) => {
      state.deleteBankDetailError = action.payload;
      state.deleteBankDetailLoading = false;
    },

    getOneBankDetailsRequest: (state) => {
      state.oneBankDetailLoading = true;
      state.oneBankDetailError = "";
    },
    getOneBankDetailsSuccess: (state, action) => {
      state.oneBankDetails = action.payload;
      state.oneBankDetailLoading = false;
    },
    getOneBankDetailError: (state, action) => {
      state.oneBankDetailError = action.payload;
      state.oneBankDetailLoading = false;
    },

    updateBankDetailsRequest: (state) => {
      state.updateBankDetailLoading = true;
      state.updateBankDetailError = "";
    },
    updateBankDetailsSuccess: (state, action) => {
      state.updateBankDetails = action.payload;
      state.updateBankDetailLoading = false;
    },
    updateBankDetailError: (state, action) => {
      state.updateBankDetailError = action.payload;
      state.updateBankDetailLoading = false;
    },

    resetDeleteState: (state) => {
      state.deleteBankDetails = "";
      state.deleteBankDetailError = "";
    },

    resetEditState: (state) => {
      state.oneBankDetails = null;
      state.oneBankDetailError = "";
      state.addBankDetails = "";
      state.addBankDetailError = "";
      state.updateBankDetailError = "";
      state.updateBankDetails = "";
    },
  },
});

export const {
  allBankDetailsRequest,
  allBankDetailsSuccess,
  allBankDetailError,

  addBankDetailsRequest,
  addBankDetailsSuccess,
  addBankDetailError,

  deleteBankDetailsRequest,
  deleteBankDetailsSuccess,
  deleteBankDetailError,

  getOneBankDetailsRequest,
  getOneBankDetailsSuccess,
  getOneBankDetailError,

  updateBankDetailsRequest,
  updateBankDetailsSuccess,
  updateBankDetailError,

  resetDeleteState,
  resetEditState,
} = allBankDetailsSlice.actions;

export default allBankDetailsSlice.reducer;
