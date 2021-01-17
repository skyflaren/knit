import React from "react";
// import Container from "react-bootstrap/Container";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      preferences: [],
    };
  }

  render() {
    return (
        <div className="Form">
            <input type="text" placeholder="What do you want to talk about? (Enter Here)"/>
            <h1>What is on your mind?</h1>
        </div>
    );
  }
}

export default Form;

{
  /* <Container >
                <Col>
                    <input type="text"/>
                </Col>
            </Container> */
}
