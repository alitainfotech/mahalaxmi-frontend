import React, { useState, useEffect } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

//i18n
import { useTranslation } from "react-i18next";
// Redux
import { Link } from "react-router-dom";

// users
import ROUTE_URLS from "../../../config/routes";

const ProfileMenu = (props) => {
  const { t } = useTranslation();
  // Declare a new state variable, which we'll call "menu"
  const [menu, setMenu] = useState(false);
  const [profileImg, setProfileImg] = useState(null);

  const [username, setusername] = useState("Admin");

  useEffect(() => {
    if (localStorage.getItem("user-details")) {
      const obj = JSON.parse(localStorage.getItem("user-details"));
      setusername(obj.first_name);
      setProfileImg(obj.profile_image);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.success]);

  return (
    <React.Fragment>
      <Dropdown
        isOpen={menu}
        toggle={() => setMenu(!menu)}
        className="d-inline-block"
      >
        <DropdownToggle
          className="btn header-item waves-effect"
          id="page-header-user-dropdown"
          tag="button"
        >
          <img
            className="rounded-circle header-profile-user"
            src={
              profileImg
                ? `${process.env.REACT_APP_BASE_URL}${profileImg}`
                : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            }
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
            }}
            alt="Header Avatar"
          />{" "}
          <span className="d-none d-xl-inline-block ms-1">{username}</span>{" "}
          {/* <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>{" "} */}
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end">
          <DropdownItem tag={Link} to={ROUTE_URLS.PROFILE}>
            {" "}
            <i className="bx bx-user font-size-16 align-middle me-1"></i>{" "}
            {t("View Profile")}{" "}
          </DropdownItem>
          <DropdownItem tag={Link} to={ROUTE_URLS.CHANGE_PASSWORD}>
            {" "}
            <i className="bx bx-user font-size-16 align-middle me-1"></i>{" "}
            {t("Change Password")}{" "}
          </DropdownItem>
          <div className="dropdown-divider" />
          <Link to="/logout" className="dropdown-item text-danger">
            <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i>{" "}
            <span>{t("Logout")}</span>
          </Link>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

export default ProfileMenu;
