import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import "../index.css";
import SignUp from "./SignUp.tsx";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit() {
    console.log(email, password);
  }

  return (
    <div className="boxy" style={{ maxWidth: "22em" }}>
      <h3>Please Sign In</h3>
      <Form>
        <Form.Group>
          <Form.Label style={{ fontWeight: "bold" }}>Email</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            className="boxsize"
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label style={{ fontWeight: "bold" }}>Password</Form.Label>
          <Form.Control
            className="boxsize"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <span style={{ padding: "5px", marginTop: "10px" }}>
          <Button type="submit" onClick={onSubmit} className="btn btn-success">
            Submit
          </Button>
          <SignUp></SignUp>{" "}
        </span>
      </Form>
    </div>
  );
};

export default Signin;
