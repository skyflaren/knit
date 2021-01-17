import React from "react";
import {getUserRoomCode as getRoomCode} from "../../backend/helpers/roomCode.js";
import {getSID} from "../../backend/helpers/utils.js";

import "./Lobby.css";

class Lobby extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     preferences: [],
  //   };
  // }

  componentDidMount() {
    try {
      const code = getRoomCode(getSID());
      if (code !== undefined) {
        location.pathname = `/matched/?room=${code}`;
      }
    } catch (e) {
      // nothing
    }

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
