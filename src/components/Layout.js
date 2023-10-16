import React, { useEffect } from "react";
import VerticalLayout from "./verticalLayout/VerticalLayout";
import { Outlet, useNavigate } from "react-router-dom";
import HorizontalLayout from "./HorizontalLayout/HorizontalLayout";
import ROUTE_URLS from "../config/routes";
import { useDispatch } from "react-redux";
import {
  changeLayout,
  changeLayoutWidth,
  changeSidebarTheme,
  changeSidebarType,
  changeTopbarTheme,
} from "../pages/layout/layout.slice";
import { useSelector } from "react-redux";

const Layout = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = JSON.parse(localStorage.getItem("theme"));
  const { layoutType } = useSelector((state) => state.layout);

  useEffect(() => {
    if (!localStorage.getItem("user-token")) {
      navigate(ROUTE_URLS.LOGIN);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (theme) {
      dispatch(changeLayout(theme.layoutType));
      dispatch(changeTopbarTheme(theme.topbarTheme));
      dispatch(changeSidebarTheme(theme.leftSideBarTheme));
      dispatch(changeSidebarType(theme.leftSideBarType));
      dispatch(changeLayoutWidth(theme.layoutWidth));
    } else {
      const themePayload = {
        layoutType: "detached",
        layoutWidth: "fluid",
        leftSideBarTheme: "light",
        leftSideBarType: "default",
        topbarTheme: "colored",
      };
      localStorage.setItem("theme", JSON.stringify(themePayload));
      dispatch(changeLayout("detached"));
      dispatch(changeTopbarTheme("colored"));
      dispatch(changeSidebarTheme("light"));
      dispatch(changeSidebarType("default"));
      dispatch(changeLayoutWidth("fluid"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {layoutType === "horizontal" ? (
        <HorizontalLayout children={props.children} />
      ) : (
        <VerticalLayout children={props.children} />
      )}
      <Outlet />
    </div>
  );
};

export default Layout;
