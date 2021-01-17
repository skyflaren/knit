import React from "react";
import arrow from "./arrow.svg";
// import Container from "react-bootstrap/Container";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      preferences: [],
      page: "index.html"
    };
  }

  changePage = () =>{
    this.setState({
      page:"lobby.html" 
    });
  }

  render() {
    return (
        <div className="Form">
            <input type="text" placeholder="What do you want to talk about today? (Enter Here)"/>
            <input type="image" src= {arrow} name="next" id="next" onClick={this.changePage}/>
            {/* <button type="text" className="btn btn-primary" onClick={this.changePage}><svg src="arrow-right (2).svg"></svg></button> */}
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
