import React, { useEffect, useState } from "react";

// Other Layout related Component

// import Footer from "./Footer";
// import Rightbar from "../CommonForBoth/Rightbar";
import Header from "./Header";
import {
  changeLayout,
  // changeLayoutWidth,
  // changeSidebarTheme,
  // changeSidebarType,
  // changeTopbarTheme,
} from "../../pages/layout/layout.slice";
import { useDispatch } from "react-redux";
import RightSidebar from "../commonForBoth/Rightbar";

const HorizontalLayout = (props) => {
  const dispatch = useDispatch();
  const [showSidebar, setShowSidebar] = useState(false);
  // const theme = JSON.parse(localStorage.getItem("theme"));

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

    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(changeLayout("horizontal"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Opens the menu - mobile
   */
  //   const openMenu = () => {
  //     this.setState({ isMenuOpened: !this.state.isMenuOpened })
  //   }

  return (
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
          <header id="page-topbar">
            <Header
              show={showSidebar}
              setShow={(flag) => setShowSidebar(flag)}
            ></Header>
          </header>
          <div className="main-content">
            {props.children}
            {/* <Footer /> */}
          </div>
        </div>
      </div>
      {showSidebar && (
        <RightSidebar
          show={showSidebar}
          setShow={(flag) => setShowSidebar(flag)}
        />
      )}
      {/* {this.props.showRightSidebar ? <Rightbar /> : null} */}
    </React.Fragment>
  );
};

// Layout.propTypes = {
//   changeLayout: PropTypes.func,
//   changeLayoutWidth: PropTypes.func,
//   changeTopbarTheme: PropTypes.func,
//   children: PropTypes.object,
//   isPreloader: PropTypes.any,
//   layoutWidth: PropTypes.any,
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
//   changeTopbarTheme,
//   changeLayout,
//   changeLayoutWidth,
// })(withRouter(Layout))

export default HorizontalLayout;
