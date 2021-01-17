import React from "react";
// import "./Navbar.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type:"main"
    };
  }

  render() {
    return (
      <div className="sidenav">
        <a href="#">About</a>
      </div>
    );
  }
}

export default Navbar;
