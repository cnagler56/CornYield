import { Form, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import postAdded from "./changeSlice";
// import { INDEX } from "../modules/Reducer";
import Table from "./Table";
// import Soybeans from "./Soybeans";

const Switcher = () => {
  const [grain, setGrain] = useState(1);
  const dispatch = useDispatch();

  function onSend() {
    dispatch(postAdded({ grain }));
    console.log(grain);
  }

  return (
    <>
      <span>
        <Form>
          <Form.Group>
            <Form.Label>Calculate a Yield</Form.Label>
            <Form.Select
              style={{ fontWeight: "bold", width: "30em" }}
              onChange={(e) => setGrain(e.target.value)}
            >
              <option value={1}>Corn</option>
              <option value={2}>Soybeans</option>
              <option value={3}>Wheat</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </span>
      <Button onClick={onSend}>Select</Button>
      <Row>
        <Table />
      </Row>
    </>
  );
};

export default Switcher;
