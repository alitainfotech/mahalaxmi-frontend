import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Row } from "reactstrap";
import { resetMessage } from "../autentication/login/login.slice";
import ToastService from "../../helper/toast-services";
const Dashboard = () => {
  const dispatch = useDispatch();
  const { loginMessage } = useSelector((state) => state.login);

  useEffect(() => {
    if (loginMessage) {
      ToastService.success(loginMessage);
      dispatch(resetMessage());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginMessage]);

  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <div className="col-12">
            <div className="page-title-box d-flex align-items-center justify-content-between">
              <h4 className="page-title mb-0 font-size-18 ">Dashboard</h4>

              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item active">
                    Welcome to Mahalaxmi Finance
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
