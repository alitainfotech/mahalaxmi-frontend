import React, { useEffect } from "react";
import * as Yup from "yup";
import Breadcrumb from "../../../components/common/Breadcrumb";
import { Alert, Button, Card, CardBody, Form, Input } from "reactstrap";
import { useDispatch } from "react-redux";
import { changePassword } from "./middleware";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import LocalstorageService from "../../../helper/localstorage-services";
import ToastService from "../../../helper/toast-services";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const { changeMessage, changeLoading, changeError } = useSelector(
    (state) => state.changePass
  );

  useEffect(() => {
    if (!changeLoading && changeMessage) {
      ToastService.success(changeMessage);
      LocalstorageService.logoutUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeMessage]);

  const handleSubmit = (values) => {
    dispatch(changePassword(values));
  };

  const changePassSchema = Yup.object().shape({
    old_password: Yup.string().required("This field is Required"),
    new_password: Yup.string().required("This Field is Required"),
    con_password: Yup.string()
      .oneOf(
        [Yup.ref("new_password"), null],
        "Confirm Password Must be Match with New Password"
      )
      .required("This field is Required"),
  });

  const formik = useFormik({
    initialValues: {
      old_password: "",
      new_password: "",
      con_password: "",
    },
    validationSchema: changePassSchema,
    onSubmit: handleSubmit,
  });

  return (
    <React.Fragment>
      <div className="page-content">
        {/* Render Breadcrumb */}
        <Breadcrumb title="Qovex" breadcrumbItem="Change Password" />
        <h4 className="card-title mb-4">Change Password</h4>
        {changeError && <Alert color="danger">{changeError}</Alert>}
        <Card>
          <CardBody>
            <Form className="form-horizontal">
              <div className="form-group mb-3">
                <Input
                  name="old_password"
                  label="Old Password"
                  className="form-control"
                  placeholder="Enter Old Password"
                  type="password"
                  onChange={formik.handleChange}
                  value={formik.values.old_password}
                  onBlur={formik.handleBlur}
                  invalid={
                    formik.touched.old_password && formik.errors.old_password
                      ? true
                      : false
                  }
                />
                {formik.touched.old_password && formik.errors.old_password && (
                  <div className="invalid-feedback">
                    {formik.errors.old_password}
                  </div>
                )}
              </div>
              <div className="form-group mb-3">
                <Input
                  name="new_password"
                  label="New Password"
                  className="form-control"
                  placeholder="Enter New Password"
                  type="password"
                  onChange={formik.handleChange}
                  value={formik.values.new_password}
                  onBlur={formik.handleBlur}
                  invalid={
                    formik.touched.new_password && formik.errors.new_password
                      ? true
                      : false
                  }
                />
                {formik.touched.new_password && formik.errors.new_password && (
                  <div className="invalid-feedback">
                    {formik.errors.new_password}
                  </div>
                )}
              </div>
              <div className="form-group mb-3">
                <Input
                  name="con_password"
                  label="Confirm Password"
                  className="form-control"
                  placeholder="Enter Confirm Password"
                  type="password"
                  onChange={formik.handleChange}
                  value={formik.values.con_password}
                  onBlur={formik.handleBlur}
                  invalid={
                    formik.touched.con_password && formik.errors.con_password
                      ? true
                      : false
                  }
                />
                {formik.touched.con_password && formik.errors.con_password && (
                  <div className="invalid-feedback">
                    {formik.errors.con_password}
                  </div>
                )}
              </div>
              <div className="text-center mt-4">
                <Button
                  type="submit"
                  color="danger"
                  onClick={formik.handleSubmit}
                >
                  Change Password
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default ChangePassword;
