import React from "react";
import arrow from "./arrow.svg";
import "./Form.css";

import { genSID } from "../../backend/helpers/utils.js";
// import parseData from "../../backend/processing/tokenizer.js";

class Form extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     "preferences": []
  //   };
  // }

  submitData() {
    // get and submit data
    let userResponse = document.getElementById("interests").value;
    let userid = document.getElementById("userid").value;

    // parseData(userResponse, userid);

    const url = "https://knit-post-382947.herokuapp.com/";
    const params = `userid=${userid}&interests=${userResponse}`;
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onloadend = () => {
      document.location.href = "/lobby";
    };
    xhr.send(params);
  }

  render() {
    return (
      <div className="Form">
        <input type="text" id="interests" placeholder="What do you want to talk about today? (Enter Here)" />
        <input type="hidden" id="userid" value={genSID()} />
        <input type="image" src={arrow} name="next" id="next" onClick={this.submitData} />
        <h1>What is on your mind?</h1>
      </div>
    );
  }
}

export default Form;
