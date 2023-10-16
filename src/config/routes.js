export const BASE_URL = "/";
const ROUTE_URLS = {
  DASHBOARD: `${BASE_URL}`,
  LOGIN: `${BASE_URL}login`,
  FORGOT_PASSWORD: `${BASE_URL}forgot-password`,
  RESET_PASSWORD: `${BASE_URL}reset-password`,
  CHANGE_PASSWORD: `${BASE_URL}change-password`,
  PROFILE: `${BASE_URL}profile`,
  LOGOUT: `${BASE_URL}logout`,
  BANK: `${BASE_URL}settings/bank`,
  PAYMENT_MODE: `${BASE_URL}settings/payment-mode`,
  DESIGNATIONS: `${BASE_URL}settings/designations`,
  USER_ROLE: `${BASE_URL}settings/roles`,
  BANK_TRANSFER: `${BASE_URL}bank-transfer`,
  BRANCH: `${BASE_URL}branch`,
  EMPLOYEE: `${BASE_URL}employee`,
  CUSTOMER: `${BASE_URL}customer`,
};

export default ROUTE_URLS;
