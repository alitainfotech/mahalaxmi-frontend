import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import ROUTE_URLS from "../config/routes";

const NonAuthLayout = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-token")) {
      navigate(ROUTE_URLS.DASHBOARD);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      {props.children}
      <Outlet />
    </React.Fragment>
  );
};

export default NonAuthLayout;
