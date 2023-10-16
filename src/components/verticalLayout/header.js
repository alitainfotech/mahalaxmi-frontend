import React, { useState } from "react";

import { Form, Input, Button, Container } from "reactstrap";

// Reactstrap
import { Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";

// import images
import { useTranslation } from "react-i18next";
import ProfileMenu from "../commonForBoth/topBarDropdown/ProfileMenu";

const Header = (props) => {
  const { t } = useTranslation();
  const [search, setsearch] = useState(false);
  function toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  // function tToggle() {
  //   var body = document.body;
  //   if (window.screen.width <= 768) {
  //     body.classList.toggle("sidebar-enable");
  //   } else {
  //     body.classList.toggle("vertical-collpsed");
  //     body.classList.toggle("sidebar-enable");
  //   }
  // }

  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="navbar-header">
          <Container fluid>
            <div className="float-end">
              <Dropdown
                className="d-inline-block d-lg-none ms-2"
                onClick={() => {
                  setsearch(!search);
                }}
                type="button"
              >
                <DropdownToggle
                  className="btn header-item noti-icon waves-effect"
                  id="page-header-search-dropdown"
                  tag="button"
                >
                  {" "}
                  <i className="mdi mdi-magnify"></i>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-lg dropdown-menu-end p-0">
                  <Form className="p-3">
                    <div className="m-0">
                      <div className="input-group">
                        <Input
                          type="text"
                          className="form-control"
                          placeholder={t("Search") + "..."}
                          aria-label="Recipient's username"
                        />
                        <div className="input-group-append">
                          <Button className="btn btn-primary" type="submit">
                            <i className="mdi mdi-magnify"></i>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Form>
                </DropdownMenu>
              </Dropdown>
              {/* <LanguageDropdown />{" "} */}
              <Dropdown className="d-none d-lg-inline-block ms-1">
                <button
                  type="button"
                  onClick={() => {
                    toggleFullscreen();
                  }}
                  className="btn header-item noti-icon waves-effect"
                  data-toggle="fullscreen"
                >
                  <i className="mdi mdi-fullscreen"></i>
                </button>
              </Dropdown>{" "}
              <ProfileMenu />
              {/* <button
                type="button"
                className="btn header-item noti-icon right-bar-toggle waves-effect"
                onClick={() => {
                  props.setShow(!props.show);
                }}
              >
                <i className="mdi mdi-settings-outline"></i>
              </button> */}
            </div>
            {/* <div>
              <div className="navbar-brand-box">
                <Link to="/" className="logo logo-dark">
                  <span className="logo-sm">
                    <img src={logoSm} alt="" height="20" />
                  </span>
                  <span className="logo-lg">
                    <img src={logoDark} alt="" height="19" />
                  </span>
                </Link>

                <Link to="/" className="logo logo-light">
                  <span className="logo-sm">
                    <img src={logoSm} alt="" height="20" />
                  </span>
                  <span className="logo-lg">
                    <img src={logoLight} alt="" height="19" />
                  </span>
                </Link>
              </div>
              <button
                type="button"
                className="btn btn-sm px-3 font-size-16 d-lg-none header-item waves-effect waves-light"
                data-toggle="collapse"
                onClick={() => {
                  tToggle();
                }}
                data-target="#topnav-menu-content"
              >
                <i className="fa fa-fw fa-bars"></i>
              </button>
              <Form className="app-search d-none d-lg-inline-block">
                <div className="position-relative">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                  <span className="bx bx-search-alt"></span>
                </div>
              </Form>
            </div> */}
          </Container>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
