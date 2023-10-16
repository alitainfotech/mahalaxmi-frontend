import ROUTE_URLS from "../config/routes";

export const permissionModuleRoute = [
  {
    path: ROUTE_URLS.BANK_TRANSFER,
    icon: "bx bxs-bank",
    title: "Bank Transfer",
    db: "bank_transfers",
  },
  {
    path: ROUTE_URLS.BRANCH,
    icon: "bx bxs-home",
    title: "Branch",
    db: "branches",
  },
  {
    path: ROUTE_URLS.EMPLOYEE,
    icon: "fas fa-user-tie",
    title: "Employee",
    db: "users",
  },
  {
    path: ROUTE_URLS.CUSTOMER,
    icon: "fas fa-users",
    title: "Customer",
    db: "customers",
  },
];

export const permissionSettingRoute = [
  {
    path: ROUTE_URLS.BANK,
    title: "Bank",
    db: "banks",
  },
  {
    path: ROUTE_URLS.PAYMENT_MODE,
    title: "Payment Mode",
    db: "payment_modes",
  },
  {
    path: ROUTE_URLS.DESIGNATIONS,
    title: "Designation",
    db: "designations",
  },
  {
    path: ROUTE_URLS.USER_ROLE,
    title: "Role",
    db: "roles",
  },
];
