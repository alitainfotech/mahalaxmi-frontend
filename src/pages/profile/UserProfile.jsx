import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Card, Alert, CardBody, Media, Button } from "reactstrap";

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation";

//Import Breadcrumb

import avatar from "../../assets/images/users/avatar-1.jpg";
// actions
import Breadcrumb from "../../components/common/Breadcrumb";
import { useDispatch } from "react-redux";
import { updateProfileDetails, updateProfileImage } from "./middleware";
import { useSelector } from "react-redux";
import { resetMessage } from "./profile.slice";

const UserProfile = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profileImg, setProfileImg] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const { loading, message, error } = useSelector((state) => state.profile);

  useEffect(() => {
    if (localStorage.getItem("user-details")) {
      const obj = JSON.parse(localStorage.getItem("user-details"));
      if (obj) {
        setemail(obj.email);
        setFirstName(obj.first_name);
        setLastName(obj.last_name);
        setProfileImg(obj.profile_image);
        setPhoneNumber(obj.phone_number);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  useEffect(() => {
    if (!loading && message) {
      setTimeout(() => {
        dispatch(resetMessage());
      }, 5000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  function handleValidSubmit(event, values) {
    dispatch(updateProfileDetails(values));
  }

  const handleClick = () => {
    ref.current.click();
  };

  const handleChange = () => {
    if (ref.current.files && ref.current.files.length > 0) {
      const formData = new FormData();
      formData.append("file", ref.current.files[0]);
      dispatch(updateProfileImage(formData));
    }
  };

  return (
    <React.Fragment>
      <div className="page-content">
        {/* Render Breadcrumb */}
        <Breadcrumb title="Alita" breadcrumbItem="Profile" />

        <Row>
          <Col lg="12">
            {error && <Alert color="danger">{error}</Alert>}
            {message && <Alert color="success">{message}</Alert>}

            <Card>
              <CardBody>
                <Media className="d-flex">
                  <div
                    className="ms-3"
                    style={{ cursor: "pointer" }}
                    onClick={(e) => handleClick(e)}
                  >
                    <img
                      src={
                        profileImg
                          ? `${process.env.REACT_APP_BASE_URL}${profileImg}`
                          : avatar
                      }
                      alt="profile"
                      className="avatar-md rounded-circle img-thumbnail"
                      style={{ position: "relative" }}
                    />
                    <i
                      className="fas fa-camera"
                      style={{
                        position: "absolute",
                        bottom: "15px",
                        left: "85px",
                      }}
                    ></i>
                    <input
                      ref={ref}
                      type="file"
                      style={{ display: "none" }}
                      onChange={() => handleChange()}
                      name="file"
                      accept="image/png, image/jpg, image/jpeg"
                    />
                  </div>
                  <Media body className="align-self-center">
                    <div className="text-muted">
                      <h5>
                        {firstName} {lastName}
                      </h5>
                      <p className="mb-1">{email}</p>
                    </div>
                  </Media>
                </Media>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <h4 className="card-title mb-4">Update Profile</h4>

        <Card>
          <CardBody>
            <AvForm
              className="form-horizontal"
              onValidSubmit={(e, v) => {
                handleValidSubmit(e, v);
              }}
            >
              <div className="form-group">
                <AvField
                  name="first_name"
                  label="First Name"
                  value={firstName}
                  className="form-control"
                  placeholder="Enter First Name"
                  type="text"
                  required
                />
              </div>
              <div className="form-group">
                <AvField
                  name="last_name"
                  label="Last Name"
                  value={lastName}
                  className="form-control"
                  placeholder="Enter Last Name"
                  type="text"
                  required
                />
              </div>
              <div className="form-group">
                <AvField
                  name="phone_number"
                  label="Phone Number"
                  value={phoneNumber}
                  className="form-control"
                  placeholder="Enter Phone Number"
                  type="text"
                  required
                  validate={{
                    maxLength: { value: 10 },
                    minLength: { value: 10 },
                  }}
                />
              </div>
              <div className="text-center mt-4">
                <Button type="submit" color="danger">
                  Edit User Name
                </Button>
              </div>
            </AvForm>
          </CardBody>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default UserProfile;
