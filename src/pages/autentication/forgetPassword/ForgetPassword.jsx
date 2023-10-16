import React, { useEffect } from "react";
import * as Yup from "yup";
import { Row, Col, Alert, Container, Form, Input } from "reactstrap";

// Redux
import { Link } from "react-router-dom";

// import images
import logo from "../../../assets/images/logo-sm-dark.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { forgetPassword } from "./middleware";
import { useFormik } from "formik";

const ForgetPassword = () => {
  const dispatch = useDispatch();
  const { forgetMessage, forgetError } = useSelector((state) => state.forget);

  useEffect(() => {
    document.body.className = "authentication-bg";
    return function cleanup() {
      document.body.className = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSubmit(values) {
    dispatch(forgetPassword(values));
  }

  const forgetSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Please enter your Email"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgetSchema,
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
                    {forgetError && (
                      <Alert
                        color="danger"
                        className="text-center mb-4"
                        style={{ marginTop: "13px" }}
                      >
                        {forgetError}
                      </Alert>
                    )}
                    {forgetMessage ? (
                      <Alert
                        color="success"
                        className="text-center mb-4"
                        style={{ marginTop: "13px" }}
                      >
                        {forgetMessage}
                      </Alert>
                    ) : null}

                    <Form className="form-horizontal">
                      <div className="mb-3">
                        <Input
                          name="email"
                          label="Email"
                          className="form-control"
                          placeholder="Enter email"
                          type="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          invalid={
                            formik.touched.email && formik.errors.email
                              ? true
                              : false
                          }
                        />
                        {formik.touched.email && formik.errors.email && (
                          <div className="invalid-feedback">
                            {formik.errors.email}
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
                  © {new Date().getFullYear()} Alita Infotech.{" "}
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

export default ForgetPassword;
