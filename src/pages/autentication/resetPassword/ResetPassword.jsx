import React, { useEffect } from "react";
import * as Yup from "yup";
import { Row, Col, Alert, Container, Form, Input } from "reactstrap";

// Redux
import { Link, useNavigate, useParams } from "react-router-dom";

// import images
import logo from "../../../assets/images/logo-sm-dark.png";
import { useDispatch, useSelector } from "react-redux";
import { checkResetToken, resetPassword } from "./middleware";
import ROUTE_URLS from "../../../config/routes";
import { resetState } from "./reset.slice";
import { useFormik } from "formik";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, resetMessage, resetLoading, resetError } = useSelector(
    (state) => state.reset
  );

  useEffect(() => {
    document.body.className = "authentication-bg";
    return function cleanup() {
      document.body.className = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!resetLoading && resetMessage) {
      navigate(ROUTE_URLS.LOGIN);
      dispatch(resetState());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetMessage]);

  useEffect(() => {
    if (token) {
      dispatch(checkResetToken({ token: token }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  function handleSubmit(values) {
    const payload = {
      reset_password_token: token,
      new_password: values.password,
    };
    dispatch(resetPassword(payload));
  }

  const resetSchema = Yup.object().shape({
    password: Yup.string().required("This field is Required"),
    con_password: Yup.string()
      .oneOf([Yup.ref("new_password"), null], "Passwords must match")
      .required("This field is Required"),
  });

  const formik = useFormik({
    initialValues: {
      password: "",
      con_password: "",
    },
    validationSchema: resetSchema,
    onSubmit: handleSubmit,
  });

  return (
    <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2"></i>
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6}>
              <div className="card overflow-hidden">
                <div className="bg-login text-center">
                  <div className="bg-login-overlay"></div>
                  <div className="position-relative">
                    <h5 className="text-white font-size-20">Reset Password</h5>
                    <p className="text-white-50 mb-0">
                      Re-Password with Alita.
                    </p>

                    <a href="/" className="logo logo-admin mt-4">
                      <img src={logo} alt="" height="30" />
                    </a>
                  </div>
                </div>
                <div className="card-body pt-5">
                  <div className="p-2">
                    {error && (
                      <Alert
                        color="danger"
                        className="text-center mb-4"
                        style={{ marginTop: "13px" }}
                      >
                        {error}
                      </Alert>
                    )}
                    {resetError && (
                      <Alert
                        color="success"
                        className="text-center mb-4"
                        style={{ marginTop: "13px" }}
                      >
                        {resetError}
                      </Alert>
                    )}

                    <Form className="form-horizontal">
                      <div className="mb-3">
                        <Input
                          name="password"
                          label="Password"
                          type="password"
                          placeholder="Enter Password"
                          value={formik.values.password}
                          onChange={formik.handleChange}
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
                      <div className="mb-3">
                        <Input
                          name="con_password"
                          label="Confirm Password"
                          type="password"
                          placeholder="Enter Confirm Password"
                          value={formik.values.con_password}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          invalid={
                            formik.touched.con_password &&
                            formik.errors.con_password
                              ? true
                              : false
                          }
                        />
                        {formik.touched.con_password &&
                          formik.errors.con_password && (
                            <div className="invalid-feedback">
                              {formik.errors.con_password}
                            </div>
                          )}
                      </div>
                      <Row className="row mb-0">
                        <Col className="col-12 text-end">
                          <button
                            className="btn btn-primary w-md waves-effect waves-light"
                            type="submit"
                            onClick={formik.handleSubmit}
                          >
                            Reset
                          </button>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </div>
              </div>
              <div className="mt-5 text-center">
                <p>
                  Remember It ?{" "}
                  <Link
                    to={ROUTE_URLS.LOGIN}
                    className="fw-medium text-primary"
                  >
                    {" "}
                    Sign In here
                  </Link>{" "}
                </p>
                <p>
                  © {new Date().getFullYear()} Alita Infotech{" "}
                  <i className="mdi mdi-heart text-danger" />
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default ResetPassword;
