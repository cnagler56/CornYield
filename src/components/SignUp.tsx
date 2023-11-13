import { Form, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import "../index.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  function onSubmit() {
    console.log(name, email, state, password);
  }

  return (
    <>
      <Button
        variant="success"
        className="btn btn-dark"
        onClick={openModal}
        style={{ float: "right" }}
        data-bs-target="#staticBackdrop"
      >
        Sign Up
      </Button>
      <Modal show={show} onHide={closeModal} className="modal fade">
        <Modal.Header>Please sign up here</Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                className="boxsize"
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="password"
                className="boxsize"
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                className="boxsize"
                onChange={(e) => setState(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Set Password</Form.Label>
              <Form.Control
                type="text"
                className="boxsize"
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onSubmit} className="btn btn-success">
            Submit
          </Button>
          <Button
            variant="success"
            className="btn btn-danger"
            onClick={closeModal}
          >
            Exit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SignUp;
