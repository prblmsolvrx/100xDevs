import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
export const Card = ({ title, desc, tag, id, completed, del }) => {
  const [tododone, setTodoDone] = useState(completed);
  const [show, setShow] = useState(false);
  const jwt = localStorage.getItem("jwtToken");
  const updateUrl = "http://localhost:3000/updatetodo/";
  const deleteUrl = "http://localhost:3000/deletetodo/";
  const todocheck = () => {
    setTodoDone(!tododone);
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const tagObject = {
    work: "purple",
    study: "red",
    self: "green",
    other: "blue",
  };
  const onCheckboxChangeHandler = async () => {
    todocheck();
    try {
      const response = await axios.put(
        updateUrl + id,
        {
          completed: !tododone,
        },
        {
          headers: {
            Authorization: jwt,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  const deleteTodo = async () => {
    try {
      const response = await axios.delete(deleteUrl + id, {
        headers: {
          Authorization: jwt,
        },
      });
      del(id);
      handleClose();
    } catch (error) {
      console.log(error);
      handleClose();
    }
  };
  return (
    <div className="todocard bg-secondary px-4 py-3">
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Action</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-primary">
          Are you sure you want to delete this task?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>
            Close
          </Button>
          <Button className="text-white" variant="danger" onClick={deleteTodo}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="vstack">
        <div className="todo-nav d-flex align-items-center">
          <p
            className={`fs-4 fw-bold text-primary overflow-hidden ${
              tododone ? `checkedtodo` : ``
            }`}
          >
            {title}
          </p>
          <Dropdown className="ms-auto" drop="start">
            <Dropdown.Toggle id="dropdown-basic" variant="secondary">
              <i className="fa fa-ellipsis-h icon light me-n2"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item className="light">
                Edit...
                <Dropdown.Divider />
              </Dropdown.Item>
              <Dropdown.Item onClick={handleShow} className="light">
                Delete
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="todo-desc pt-3">
          <p
            className={`fw-light text-primary todo-desc-body overflow-hidden ${
              tododone ? `checkedtodo` : ``
            }`}
          >
            {desc}
          </p>
        </div>
        <div className="todo-footer d-flex align-items-center pt-4">
          <div className={`tag tag-${tagObject[tag]} rounded-circle`}></div>
          <Form className="ms-auto">
            <Form.Check
              type="checkbox"
              id="default-checkbox"
              checked={tododone}
              onChange={onCheckboxChangeHandler}
            ></Form.Check>
          </Form>
        </div>
      </div>
    </div>
  );
};
