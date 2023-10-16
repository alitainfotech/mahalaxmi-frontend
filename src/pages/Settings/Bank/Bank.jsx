import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  Col,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Table,
} from "reactstrap";
import LocalstorageService from "../../../helper/localstorage-services";
import { useDispatch } from "react-redux";
import { getAllBankDeatails } from "./bank.middleware";
import { useSelector } from "react-redux";

const Bank = () => {
  const dispatch = useDispatch();
  const userPermision = LocalstorageService.getLoggedInUserDetails();
  const { allBankDetails, allBankDetailLoading } = useSelector(
    (state) => state.bank
  );
  const [openAddModal, setOpenAddModal] = useState(false);

  const findPermission = userPermision?.roles[0]?.roles.find((role) => {
    return role.db === "banks";
  });

  useEffect(() => {
    dispatch(getAllBankDeatails());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCloseAddModal = () => {
    setOpenAddModal(false);
    // formik.resetForm();
  };

  return (
    <div className="page-content">
      <Row>
        <div className="col-12">
          <div className="page-title-box d-flex align-items-center justify-content-between">
            <h4 className="page-title mb-0 font-size-18 ">Bank</h4>
          </div>
        </div>
      </Row>
      <>
        <Row>
          <Col className="col-12">
            <Card>
              <CardBody>
                {/* <CardTitle>Default Datatable </CardTitle> */}
                <CardSubtitle className="mb-3">
                  {findPermission && findPermission.action.includes("add") && (
                    <div className={"add-btn"}>
                      <Button
                        color="primary"
                        className="btn btn-primary waves-effect waves-light"
                        type="button"
                        onClick={() => setOpenAddModal(true)}
                      >
                        Add
                      </Button>
                    </div>
                  )}
                </CardSubtitle>

                <div style={{ marginTop: "50px" }}>
                  <Table striped size="large">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allBankDetails &&
                        allBankDetails.length > 0 &&
                        allBankDetails.map((bank, i) => (
                          <tr key={i}>
                            <th scope="row">{i + 1}</th>
                            <td>{bank.name}</td>
                            <td>
                              <i
                                style={{ cursor: "pointer" }}
                                className="bx bx-edit"
                                // onClick={() => setOpenAddModal(true)}
                              ></i>{" "}
                              <i className="bx bx-trash"></i>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </>

      <Modal centered isOpen={openAddModal} toggle={handleCloseAddModal}>
        <ModalHeader toggle={handleCloseAddModal}>Add Bank</ModalHeader>
        <ModalBody>
          <Input bsSize="" />
        </ModalBody>
        <ModalFooter>
          <Button color="primary">Submit</Button>{" "}
          <Button color="secondary" onClick={handleCloseAddModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Bank;
