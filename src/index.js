import React from "react";
import ReactDOM from "react-dom";
import { 
    BrowserRouter as Router, 
    Route
} from "react-router-dom";

import "./index.css";

// lobby
import Lobby from "./components/Lobby";
import Landing from "./components/Landing";
import MatchFound from "./components/MatchFound";


ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Route path="/lobby" component={Lobby} />
            <Route path="/matched" component={MatchFound} />
            <Route exact path="/" component={Landing} />
        </Router>
    </React.StrictMode>,
    document.getElementById("content")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
