import React from "react";
// import Container from "react-bootstrap/Container";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import "./Form.css";
import Form from "../Form";
// import Navbar from "./components/Navbar";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import logo from "../../knit-logo.svg";

import "./Landing.css";

class Landing extends React.Component {
  render() {
    return (
      <Row>
        <Col className="sidebar" md="auto">
          <img src={logo} />
        </Col>
        <Col className="form-container">
          <p>Welcome to Knit</p>
          <Form />
        </Col>
      </Row>
    );
  }
}

export default Landing;
