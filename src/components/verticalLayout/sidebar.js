import React from "react";
import { useLocation } from "react-router-dom";

//i18n
import SidebarContent from "./SidebarContent";

const Sidebar = () => {
  const params = useLocation();
  return (
    <React.Fragment>
      <div className="vertical-menu">
        <div className="h-100">
          {/* <div className="user-wid text-center py-4">
            <div className="user-img">
              <img
                src={avatar2}
                alt=""
                className="avatar-md mx-auto rounded-circle"
              />
            </div>

            <div className="mt-3">
              <Link to="#" className="text-dark fw-medium font-size-16">
                Patrick Becker
              </Link>
              <p className="text-body mt-1 mb-0 font-size-13">UI/UX Designer</p>
            </div>
          </div> */}
          <div data-simplebar className="h-100">
            <SidebarContent params={params} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
