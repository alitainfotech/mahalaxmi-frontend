import React, { useEffect, useRef } from "react";

//Import Scrollbar
import SimpleBar from "simplebar-react";

// MetisMenu
import MetisMenu from "metismenujs";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import ROUTE_URLS from "../../config/routes";
import LocalstorageService from "../../helper/localstorage-services";
import {
  permissionModuleRoute,
  permissionSettingRoute,
} from "../../helper/sidebar-route";

//i18n

const SidebarContent = ({ params }) => {
  const ref = useRef();
  const { t } = useTranslation();
  // Use ComponentDidMount and ComponentDidUpdate method symultaniously
  useEffect(() => {
    const pathName = "/dashboard";
    // const pathName = props.location.pathname;

    const initMenu = () => {
      new MetisMenu("#side-menu");
      let matchingMenuItem = null;
      const ul = document.getElementById("side-menu");
      const items = ul.getElementsByTagName("a");
      for (let i = 0; i < items.length; ++i) {
        if (pathName === items[i].pathname) {
          matchingMenuItem = items[i];
          break;
        }
      }
      if (matchingMenuItem) {
        activateParentDropdown(matchingMenuItem);
      }
    };
    initMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    ref.current.recalculate();
    // eslint-disable-next-line
  });

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop;
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300;
      }
    }
  }

  function activateParentDropdown(item) {
    item.classList.add("active");
    const parent = item.parentElement;
    const parent2El = parent.childNodes[1];
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show");
    }

    if (parent) {
      parent.classList.add("mm-active");
      const parent2 = parent.parentElement;

      if (parent2) {
        parent2.classList.add("mm-show"); // ul tag

        const parent3 = parent2.parentElement; // li tag

        if (parent3) {
          parent3.classList.add("mm-active"); // li
          parent3.childNodes[0].classList.add("mm-active"); //a
          const parent4 = parent3.parentElement; // ul
          if (parent4) {
            parent4.classList.add("mm-show"); // ul
            const parent5 = parent4.parentElement;
            if (parent5) {
              parent5.classList.add("mm-show"); // li
              parent5.childNodes[0].classList.add("mm-active"); // a tag
            }
          }
        }
      }
      scrollElement(item);
      return false;
    }
    scrollElement(item);
    return false;
  }

  const userPermision = LocalstorageService.getLoggedInUserDetails();

  return (
    <React.Fragment>
      <SimpleBar className="vertical-simplebar" ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">{t("Main")} </li>
            <li
              className={`${
                params.pathname === ROUTE_URLS.DASHBOARD ? "mm-active" : ""
              }`}
            >
              <Link to={ROUTE_URLS.DASHBOARD}>
                <i className="mdi mdi-airplay"></i>
                {t("Dashboard")}
              </Link>
            </li>
            <li className="menu-title">{t("Module")} </li>
            {userPermision?.roles[0]?.roles &&
              userPermision?.roles[0]?.roles.length > 0 &&
              userPermision?.roles[0]?.roles.map((o, i) => (
                <React.Fragment key={i}>
                  {permissionModuleRoute.map((route, i) => (
                    <React.Fragment key={i}>
                      {o.db === route.db && o.action.includes("view") && (
                        <li
                          className={`${
                            params.pathname === route.path ? "mm-active" : ""
                          }`}
                        >
                          <Link to={route.path}>
                            <i className={route.icon}></i>
                            {t(route.title)}
                          </Link>
                        </li>
                      )}
                    </React.Fragment>
                  ))}
                </React.Fragment>
              ))}
            <li className="menu-title">{t("Setting")} </li>
            <li>
              {/* Add has-arrow class to display arrow */}
              <Link to="/#" className="has-arrow waves-effect">
                <i className="fas fa-cog"></i>
                <span>{t("Setting")}</span>
              </Link>
              <ul className="sub-menu">
                {userPermision?.roles[0]?.roles &&
                  userPermision?.roles[0]?.roles.length > 0 &&
                  userPermision?.roles[0]?.roles.map((o, i) => (
                    <React.Fragment key={i}>
                      {permissionSettingRoute.map((route, i) => (
                        <React.Fragment key={i}>
                          {o.db === route.db && o.action.includes("view") && (
                            <li
                              className={`${
                                params.pathname === route.path
                                  ? "mm-active"
                                  : ""
                              }`}
                            >
                              <Link to={route.path}>{t(route.title)}</Link>
                            </li>
                          )}
                        </React.Fragment>
                      ))}
                    </React.Fragment>
                  ))}
              </ul>
            </li>
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  );
};

export default SidebarContent;
