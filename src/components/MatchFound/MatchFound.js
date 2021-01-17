import React from "react";
// import roomCode as getRoomCode from "../../backend/utils/usercode.js";
import "./MatchFound.css";
import { getRequestParam as getParam } from "../../backend/helpers/utils.js";

class MatchFound extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     "preferences": [],
  //     "room": getParam("room") 
  //   };
  // }

  componentDidMount() {
    /*
    if (room === undefined || room != users_room) {
      // show error
    }
    */

    // Document title
    document.title = "Match Found!";

    document.getElementById("content").classList.add("match");
  }

  joinCall() {
    location.pathname = "/video/";
  }

  render() {
    return (
      <>
        <h1 className="matched">matched!</h1>
        <p className="matched">you have been matched with someone special.</p>
        <form method="get" action="/video" className="matched">
          <label htmlFor="name">what is your name?</label>
          <br />
          <input id="name" name="name" />
          <input id="room" name="room" value={getParam("room")} type="hidden" />
          <button type="submit" onClick={this.joinCall}><i data-feather="arrow-right"></i></button>
        </form>
      </>
    );
  }
}

export default MatchFound;
