import React from "react";
// import roomCode as getRoomCode from "../../backend/utils/usercode.js";
import "./Lobby.css";

class Lobby extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     preferences: [],
  //   };
  // }

  componentDidMount() {
    // const code = 123;
    // roomCode().then(code => {
      // if (code !== undefined) {
        // location.pathname = `/matched/?room=${code}`;
      // }
    // }

    /*
    Call function to check whether the room has been assigned
    */

    // Auto reload
    setTimeout(() => {
      location.reload();
    }, 8000);

    // Document title
    document.title = "Finding a match...";
  }

  render() {
    return (
      <>
        <p>more words, finding a match</p>
        <div className="search">
            <span><i data-feather="search"></i></span>
        </div>
      </>
    );
  }
}

export default Lobby;
