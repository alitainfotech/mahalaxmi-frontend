import Login from "../pages/autentication/login/Login";
import ForgetPassword from "../pages/autentication/forgetPassword/ForgetPassword";
import ResetPassword from "../pages/autentication/resetPassword/ResetPassword";

import Dashboard from "../pages/dashboard/Dashboard";
import UserProfile from "../pages/profile/UserProfile";
import ChangePassword from "../pages/autentication/changePassword/ChangePassword";
import ROUTE_URLS from "../config/routes";
import Logout from "../pages/autentication/logout/Logout";
import Bank from "../pages/Settings/Bank/Bank";
import PaymentMode from "../pages/Settings/Payment Mode/PaymentMode";
import Designation from "../pages/Settings/Designation/Designation";
import UserRole from "../pages/Settings/UserRole/UserRole";
import BankTransfer from "../pages/dashboard/modules/Bank Transfer/BankTransfer";
import Branch from "../pages/dashboard/modules/Branch/Branch";
import Employee from "../pages/dashboard/modules/Employee/Employee";
import Customer from "../pages/dashboard/modules/Customer/Customer";

const permissionRoute = [
  { path: `${ROUTE_URLS.BANK}`, component: Bank, db: "banks" },
  {
    path: `${ROUTE_URLS.PAYMENT_MODE}`,
    component: PaymentMode,
    db: "payment_modes",
  },
  {
    path: `${ROUTE_URLS.DESIGNATIONS}`,
    component: Designation,
    db: "designations",
  },
  { path: `${ROUTE_URLS.USER_ROLE}`, component: UserRole, db: "roles" },
  {
    path: `${ROUTE_URLS.BANK_TRANSFER}`,
    component: BankTransfer,
    db: "bank_transfers",
  },
  { path: `${ROUTE_URLS.BRANCH}`, component: Branch, db: "branches" },
  { path: `${ROUTE_URLS.EMPLOYEE}`, component: Employee, db: "users" },
  { path: `${ROUTE_URLS.CUSTOMER}`, component: Customer, db: "customers" },
];

const userRoutes = [
  { path: ROUTE_URLS.DASHBOARD, component: Dashboard },
  { path: ROUTE_URLS.PROFILE, component: UserProfile },
  { path: ROUTE_URLS.CHANGE_PASSWORD, component: ChangePassword },
  { path: `${ROUTE_URLS.LOGOUT}`, component: Logout },
];

const authRoutes = [
  { path: ROUTE_URLS.LOGIN, component: Login },
  { path: ROUTE_URLS.FORGOT_PASSWORD, component: ForgetPassword },
  { path: `${ROUTE_URLS.RESET_PASSWORD}/:token`, component: ResetPassword },
];

export { userRoutes, authRoutes, permissionRoute };
