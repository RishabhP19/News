import "./App.css";
import React from "react";
import NavBar from "./Components/Header/NavBar";

import { BrowserRouter as Router, Switch } from "react-router-dom";

import Homepage from "./Components/Homepage/Homepage";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />

        <Switch>
          <Homepage />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
