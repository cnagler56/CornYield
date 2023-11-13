import "./App.css";

import Switcher from "./components/Switcher";

import Banner from "./components/Banner";
import ForSale from "./components/ForSale";
import HorizontalMenuBar from "./components/HorizontalMenuBar";
import Signin from "./components/Signin";
import PostsList from "./features/post/PostsList";
import { Col, Row } from "react-bootstrap";

function App() {
  return (
    <>
      <Row>
        <Banner></Banner>
      </Row>
      <Row>
        <HorizontalMenuBar />
      </Row>
      <Row>
        <Col>
          <PostsList></PostsList>
        </Col>

        <Col>{<Signin></Signin>}</Col>
      </Row>
      <Row>
        <Col>
          <ForSale></ForSale>
        </Col>
      </Row>
      <Row>
        <Switcher />
      </Row>
    </>
  );
}

export default App;
