import React from "react";
import ReactDOM from "react-dom";
// import reportWebVitals from "./reportWebVitals";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// index.html
import "./index.css";
import "./components/Form/Form.css";
// import App from "./components/App";
import Form from "./components/Form";
// import Navbar from "./components/Navbar";
// import reportWebVitals from "./reportWebVitals";
// import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import logo from "./components/Form/knit-logo.svg";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <React.StrictMode>
    <Row>
      <Col className="sidebar" md="auto">
        <img src={logo} />
      </Col>
      <Col className="form-container">
          <Form />
          <p>Instructions</p>
      </Col>
    </Row>
  </React.StrictMode>,
  document.getElementById("content")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
