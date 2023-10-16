import React, { useEffect, useState } from "react";
import Header from "./header";
import { useDispatch } from "react-redux";
import {
  changeLayout,
  // changeLayoutWidth,
  // changeSidebarTheme,
  // changeSidebarType,
  // changeTopbarTheme,
} from "../../pages/layout/layout.slice";
import Sidebar from "./sidebar";
import Rightbar from "../commonForBoth/Rightbar";

const VerticalLayout = (props) => {
  const dispatch = useDispatch();
  const [showSidebar, setShowSidebar] = useState(false);
  const theme = JSON.parse(localStorage.getItem("theme"));
  // const { leftSideBarTheme, leftSideBarType } = useSelector(
  //   (state) => state.layout
  // );

  useEffect(() => {
    if (props.isPreloader === true) {
      document.getElementById("preloader").style.display = "block";
      document.getElementById("status").style.display = "block";

      setTimeout(function () {
        document.getElementById("preloader").style.display = "none";
        document.getElementById("status").style.display = "none";
      }, 2500);
    } else {
      document.getElementById("preloader").style.display = "none";
      document.getElementById("status").style.display = "none";
    }

    // Scroll Top to 0
    window.scrollTo(0, 0);
    // let currentage = this.capitalizeFirstLetter(props.location.pathname);

    // document.title =
    //   currentage + " | Qovex - Responsive Bootstrap 5 Admin Dashboard";
    // if (props.leftSideBarTheme) {
    //   props.changeSidebarTheme(props.leftSideBarTheme);
    // }

    // props.changeLayout("detached");

    // if (props.layoutWidth) {
    //   props.changeLayoutWidth(props.layoutWidth);
    // }

    // if (props.leftSideBarType) {
    //   props.changeSidebarType(props.leftSideBarType);
    // }
    // if (props.topbarTheme) {
    //   props.changeTopbarTheme(props.topbarTheme);
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   dispatch(changeLayout("detached"));
  //   dispatch(changeTopbarTheme("colored"));
  //   dispatch(changeSidebarTheme("light"));
  //   dispatch(changeSidebarType("default"));
  //   dispatch(changeLayoutWidth("fluid"));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useEffect(() => {
    dispatch(changeLayout("detached"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleMenuCallback = () => {
    if (props.leftSideBarType === "default") {
      props.changeSidebarType("condensed", this.state.isMobile);
    } else if (props.leftSideBarType === "condensed") {
      props.changeSidebarType("default", this.state.isMobile);
    }
  };

  return (
    //   constructor(props) {
    //     super(props);
    //     this.state = {
    //       isMobile: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
    //     };
    //     this.toggleMenuCallback = this.toggleMenuCallback.bind(this);
    //   }

    //   capitalizeFirstLetter = (string) => {
    //     return string.charAt(1).toUpperCase() + string.slice(2);
    //   };

    <React.Fragment>
      <div id="preloader">
        <div id="status">
          <div className="spinner-chase">
            <div className="chase-dot"></div>
            <div className="chase-dot"></div>
            <div className="chase-dot"></div>
            <div className="chase-dot"></div>
            <div className="chase-dot"></div>
            <div className="chase-dot"></div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div id="layout-wrapper">
          <Header
            toggleMenuCallback={() => toggleMenuCallback()}
            show={showSidebar}
            setShow={(flag) => setShowSidebar(flag)}
          />
          <Sidebar
            theme={theme?.leftSideBarTheme}
            type={theme?.leftSideBarType}
            // isMobile={this.state.isMobile}
          />
          <div className="main-content">
            {props.children}
            {/* <Footer /> */}
          </div>
        </div>
      </div>
      {showSidebar && (
        <Rightbar show={showSidebar} setShow={(flag) => setShowSidebar(flag)} />
      )}
    </React.Fragment>
  );
};

export default VerticalLayout;

// Layout.propTypes = {
//   changeLayoutWidth: PropTypes.func,
//   changeSidebarTheme: PropTypes.func,
//   changeSidebarType: PropTypes.func,
//   changeTopbarTheme: PropTypes.func,
//   children: PropTypes.object,
//   isPreloader: PropTypes.any,
//   layoutWidth: PropTypes.any,
//   leftSideBarTheme: PropTypes.any,
//   leftSideBarType: PropTypes.any,
//   location: PropTypes.object,
//   showRightSidebar: PropTypes.any,
//   topbarTheme: PropTypes.any
// }

// const mapStatetoProps = state => {
//   return {
//     ...state.Layout,
//   }
// }
// export default connect(mapStatetoProps, {
//   changeLayout,
//   changeSidebarTheme,
//   changeSidebarType,
//   changeTopbarTheme,
//   changeLayoutWidth,
// })(withRouter(Layout))
