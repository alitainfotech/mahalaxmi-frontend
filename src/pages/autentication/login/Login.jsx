import React, { useEffect } from "react";
import * as Yup from "yup";

import { Row, Col, Alert, Container, Form, Input, Spinner } from "reactstrap";

// Redux
import { Link, useNavigate } from "react-router-dom";

// import images
import logo from "../../../assets/images/logo-sm-dark.png";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./middleware";
import ROUTE_URLS from "../../../config/routes";
import { useFormik } from "formik";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loginError, loginMessage, loginLoading } = useSelector(
    (state) => state.login
  );

  useEffect(() => {
    document.body.className = "authentication-bg";

    return function cleanup() {
      document.body.className = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!loginLoading && loginMessage) {
      navigate(ROUTE_URLS.DASHBOARD);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginMessage]);

  const loginSchema = Yup.object().shape({
    code: Yup.string().required("Please enter your login code"),
    password: Yup.string().required("This Field is required"),
  });

  // handleValidSubmit
  const handleSubmit = (values) => {
    dispatch(loginUser(values));
  };

  const formik = useFormik({
    initialValues: {
      code: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: handleSubmit,
  });

  return (
    <React.Fragment>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <div className="card overflow-hidden">
                <div className="bg-login text-center">
                  <div className="bg-login-overlay"></div>
                  <div className="position-relative">
                    <h5 className="text-white font-size-20">Welcome Back !</h5>
                    <p className="text-white-50 mb-0">
                      Sign in to continue to Mahalaxmi Finance Admin Panel.
                    </p>
                    <Link to="/" className="logo logo-admin mt-4">
                      <img src={logo} alt="" height="30" />
                    </Link>
                  </div>
                </div>
                <div className="card-body pt-5">
                  <div className="p-2">
                    <Form className="form-horizontal">
                      {loginError && <Alert color="danger">{loginError}</Alert>}

                      {loginMessage && (
                        <Alert color="success">{loginMessage}</Alert>
                      )}

                      <div className="mb-3">
                        <Input
                          name="code"
                          label="User Code"
                          placeholder="Enter user code"
                          type="text"
                          value={formik.values.code}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          invalid={
                            formik.touched.code && formik.errors.code
                              ? true
                              : false
                          }
                        />
                        {formik.touched.code && formik.errors.code && (
                          <div className="invalid-feedback">
                            {formik.errors.code}
                          </div>
                        )}
                      </div>

                      <div className="mb-3">
                        <Input
                          name="password"
                          label="Password"
                          type="password"
                          placeholder="Enter Password"
                          onChange={formik.handleChange}
                          value={formik.values.password}
                          onBlur={formik.handleBlur}
                          invalid={
                            formik.touched.password && formik.errors.password
                              ? true
                              : false
                          }
                        />
                        {formik.touched.password && formik.errors.password && (
                          <div className="invalid-feedback">
                            {formik.errors.password}
                          </div>
                        )}
                      </div>

                      <div className="form-check">
                        <Input
                          type="checkbox"
                          className="form-check-input"
                          id="customControlInline"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customControlInline"
                        >
                          Remember me
                        </label>
                      </div>

                      <div className="mt-3">
                        <button
                          className="btn btn-primary w-100 waves-effect waves-light"
                          type="submit"
                          onClick={formik.handleSubmit}
                          disabled={loginLoading}
                        >
                          {loginLoading ? (
                            <Spinner size="sm" color="light">
                              Loading...
                            </Spinner>
                          ) : (
                            "Log In"
                          )}
                        </button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
              <div className="mt-5 text-center">
                <p>
                  © {new Date().getFullYear()} Mahalami Finance{" "}
                  <i className="mdi mdi-heart text-danger"></i>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};
export default Login;
