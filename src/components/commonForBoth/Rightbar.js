import React from "react";

//SimpleBar
import SimpleBar from "simplebar-react";

import { Link } from "react-router-dom";

import "./rightbar.scss";

import { useDispatch, useSelector } from "react-redux";
import {
  changeLayout,
  changeLayoutWidth,
  changeSidebarTheme,
  changeSidebarType,
  changeTopbarTheme,
} from "../../pages/layout/layout.slice";

const RightSidebar = (props) => {
  const dispatch = useDispatch();
  const {
    layoutType,
    layoutWidth,
    topbarTheme,
    leftSideBarType,
    leftSideBarTheme,
  } = useSelector((state) => state.layout);

  return (
    <React.Fragment>
      <div className="right-bar">
        <SimpleBar style={{ height: "900px" }}>
          <div data-simplebar className="h-100">
            <div className="rightbar-title d-flex align-items-center px-3 py-4">
              <h5 className="m-0 me-2">Settings</h5>
              <Link
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  props.setShow(false);
                }}
                className="right-bar-toggle ms-auto"
              >
                <i className="mdi mdi-close noti-icon" />
              </Link>
            </div>

            <hr className="my-0" />

            <div className="p-4">
              <div className="radio-toolbar">
                <span className="mb-2 d-block">Layouts</span>
                <input
                  type="radio"
                  id="radioVertical"
                  name="radioFruit"
                  value="detached"
                  checked={layoutType === "detached"}
                  onChange={(e) => {
                    if (e.target.checked) {
                      dispatch(changeLayout(e.target.value));
                    }
                  }}
                />
                <label htmlFor="radioVertical">Vertical</label>{" "}
                <input
                  type="radio"
                  id="radioHorizontal"
                  name="radioFruit"
                  value="horizontal"
                  checked={layoutType === "horizontal"}
                  onChange={(e) => {
                    if (e.target.checked) {
                      dispatch(changeLayout(e.target.value));
                    }
                  }}
                />
                <label htmlFor="radioHorizontal">Horizontal</label>
              </div>

              <hr className="mt-1" />

              <div className="radio-toolbar">
                <span className="mb-2 d-block" id="radio-title">
                  Layout Width
                </span>
                <input
                  type="radio"
                  id="radioFluid"
                  name="radioWidth"
                  value="fluid"
                  checked={layoutWidth === "fluid"}
                  onChange={(e) => {
                    if (e.target.checked) {
                      dispatch(changeLayoutWidth(e.target.value));
                    }
                  }}
                />
                <label htmlFor="radioFluid">Fluid</label>
                {"   "}
                <input
                  type="radio"
                  id="radioBoxed"
                  name="radioWidth"
                  value="boxed"
                  checked={layoutWidth === "boxed"}
                  onChange={(e) => {
                    if (e.target.checked) {
                      dispatch(changeLayoutWidth(e.target.value));
                    }
                  }}
                />
                <label htmlFor="radioBoxed">Boxed</label>
              </div>
              <hr className="mt-1" />

              <div className="radio-toolbar">
                <span className="mb-2 d-block" id="radio-title">
                  Topbar Theme
                </span>
                {layoutType === "horizontal" ? (
                  <>
                    <input
                      type="radio"
                      id="radioThemeLight"
                      name="radioTheme"
                      value="light"
                      checked={topbarTheme === "light"}
                      onChange={(e) => {
                        if (e.target.checked) {
                          dispatch(changeTopbarTheme(e.target.value));
                        }
                      }}
                    />
                    <label htmlFor="radioThemeLight">Light</label>
                  </>
                ) : null}
                {"   "}
                <input
                  type="radio"
                  id="radioThemeDark"
                  name="radioTheme"
                  value="dark"
                  checked={topbarTheme === "dark"}
                  onChange={(e) => {
                    if (e.target.checked) {
                      dispatch(changeTopbarTheme(e.target.value));
                    }
                  }}
                />

                <label htmlFor="radioThemeDark">Dark</label>
                {"   "}
                <>
                  {" "}
                  <input
                    type="radio"
                    id="radioThemeColored"
                    name="radioTheme"
                    value="colored"
                    checked={topbarTheme === "colored"}
                    onChange={(e) => {
                      if (e.target.checked) {
                        dispatch(changeTopbarTheme(e.target.value));
                      }
                    }}
                  />
                  <label htmlFor="radioThemeColored">Colored</label>{" "}
                </>
              </div>

              {layoutType === "detached" ? (
                <React.Fragment>
                  <hr className="mt-1" />
                  <div className="radio-toolbar">
                    <span className="mb-2 d-block" id="radio-title">
                      Left Sidebar Type{" "}
                    </span>
                    <input
                      type="radio"
                      id="sidebarDefault"
                      name="sidebarType"
                      value="default"
                      checked={leftSideBarType === "default"}
                      onChange={(e) => {
                        if (e.target.checked) {
                          dispatch(changeSidebarType(e.target.value));
                        }
                      }}
                    />
                    <label htmlFor="sidebarDefault">Default</label>
                    {"   "}
                    <input
                      type="radio"
                      id="sidebarCompact"
                      name="sidebarType"
                      value="compact"
                      checked={leftSideBarType === "compact"}
                      onChange={(e) => {
                        if (e.target.checked) {
                          dispatch(changeSidebarType(e.target.value));
                        }
                      }}
                    />
                    <label htmlFor="sidebarCompact">Compact</label>
                    {"   "}
                    <input
                      type="radio"
                      id="sidebarIcon"
                      name="sidebarType"
                      value="icon"
                      checked={leftSideBarType === "icon"}
                      onChange={(e) => {
                        if (e.target.checked) {
                          dispatch(changeSidebarType(e.target.value));
                        }
                      }}
                    />
                    <label htmlFor="sidebarIcon">Icon</label>
                  </div>

                  <hr className="mt-1" />

                  <div className="radio-toolbar">
                    <span className="mb-2 d-block" id="radio-title">
                      Left Sidebar Color
                    </span>
                    <input
                      type="radio"
                      id="leftsidebarThemelight"
                      name="leftsidebarTheme"
                      value="light"
                      checked={leftSideBarTheme === "light"}
                      onChange={(e) => {
                        if (e.target.checked) {
                          dispatch(changeSidebarTheme(e.target.value));
                        }
                      }}
                    />

                    <label htmlFor="leftsidebarThemelight">Light</label>
                    {"   "}
                    <input
                      type="radio"
                      id="leftsidebarThemedark"
                      name="leftsidebarTheme"
                      value="dark"
                      checked={leftSideBarTheme === "dark"}
                      onChange={(e) => {
                        if (e.target.checked) {
                          dispatch(changeSidebarTheme(e.target.value));
                        }
                      }}
                    />

                    <label htmlFor="leftsidebarThemedark">Dark</label>
                    {"   "}
                    <input
                      type="radio"
                      id="leftsidebarThemecolored"
                      name="leftsidebarTheme"
                      value="colored"
                      checked={leftSideBarTheme === "colored"}
                      onChange={(e) => {
                        if (e.target.checked) {
                          dispatch(changeSidebarTheme(e.target.value));
                        }
                      }}
                    />

                    <label htmlFor="leftsidebarThemecolored">Colored</label>
                  </div>
                  <hr className="mt-1" />
                </React.Fragment>
              ) : null}
            </div>
          </div>
        </SimpleBar>
      </div>
      <div className="rightbar-overlay" />
    </React.Fragment>
  );
};

export default RightSidebar;
