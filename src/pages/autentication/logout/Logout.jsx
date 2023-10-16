import React, { useEffect } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "./middleware";
import ROUTE_URLS from "../../../config/routes";
import LocalstorageService from "../../../helper/localstorage-services";
import { resetMessage } from "./logout.slice";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, message } = useSelector((state) => state.logout);

  useEffect(() => {
    if (!loading && message) {
      LocalstorageService.logoutUser();
      navigate(ROUTE_URLS.LOGIN);
      dispatch(resetMessage());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  return (
    <SweetAlert
      title="Are you sure you want to logout?"
      warning
      showCancel
      confirmBtnText="Logout"
      cancelBtnText="Close"
      confirmBtnBsStyle="success"
      cancelBtnBsStyle="danger"
      onConfirm={() => {
        dispatch(logoutUser());
      }}
      onCancel={() => navigate(-1)}
    />
  );
};

export default Logout;
