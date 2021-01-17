import React from "react";
import arrow from "./arrow.svg";
// import Container from "react-bootstrap/Container";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
import "./Form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "preferences": []
    };
  }

  submitData = () => {
    // get and submit data
    document.getElementById("interests");
  };

  render() {
    return (
      <div className="Form">
        <input type="text" id="interests" placeholder="What do you want to talk about today? (Enter Here)"/>
        <input type="image" src={arrow} name="next" id="next" onClick={this.submitData}/>
        <h1>What is on your mind?</h1>
      </div>
    );
  }
}

export default Form;
