import React from "react";
import logo from "./logo.svg";
import "./App.css";
import firebase from "../../firebase.js"; 

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      "features": "Firebase SDK Loading&hellip;"
    };
  }

  componentDidMount() {
    // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
    // // The Firebase SDK is initialized and available here!
    //
    // firebase.auth().onAuthStateChanged(user => { });
    // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
    // firebase.firestore().doc('/foo/bar').get().then(() => { });
    // firebase.functions().httpsCallable('yourFunction')().then(() => { });
    // firebase.messaging().requestPermission().then(() => { });
    // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
    // firebase.analytics(); // call to activate
    // firebase.analytics().logEvent('tutorial_completed');
    // firebase.performance(); // call to activate
    //
    // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

    try {
      let app = firebase.app();
      // let app = firebase.app;

      let features = [
        "auth", 
        "database", 
        "firestore",
        "functions",
        "messaging", 
        "storage", 
        "analytics", 
        "remoteConfig",
        "performance"
      ].filter(feature => typeof app[feature] === "function");
      // console.log(firebase);
      
      this.setState({
        "features" : `Firebase SDK loaded with ${features.join(", ")}`
      });
    } catch (e) {
      console.error(e);

      this.setState({
        "features" : "Error loading the Firebase SDK, check the console."
      });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p id="load">{ this.state.features }</p>
        </header>
      </div>
    );
  }
}

export default App;
