import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ForSale = () => {
  const dispatch = useDispatch();
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  function onSubmit() {
    dispatch(salesAdded(type, description));
    console.log(type);
  }

  return (
    <div className="boxy" style={{ fontWeight: "bold", width: "32em" }}>
      <h3 className="dark">Equipment for Sale</h3>
      <Form>
        <Form.Group>
          <Form.Label>What You Got?</Form.Label>
          <Form.Select
            style={{ fontWeight: "bold", width: "30em" }}
            onChange={(e) => setType(e.target.value)}
          >
            <option value={"Combine"}>Combines</option>
            <option value={"Tractor"}>Tractors</option>
            <option value={"Planter"}>Planters</option>
            <option value={"Plow"}>Plows</option>
            <option value={"Sprayer"}>Sprayers</option>
            <option value={"Truck"}>Trucks</option>
            <option value={"Vintage"}>Vintage</option>
            <option value={"Other"}>Other</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="textarea"
            style={{
              marginBottom: "25px",
              minWidth: "30em",
              height: "6em",
            }}
            onChange={(e) => setDescription(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" style={{ width: "30em" }} onSubmit={onSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ForSale;
