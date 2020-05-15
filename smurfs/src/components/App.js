import React, { Component } from "react";
import "./App.css";

import SmurfForm from "./SmurfForm"
import SmurfList from "./SmurfList"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Gargamel creates Smurfs</h1>
        <img src={require("../img/gargamel.png")} alt="the evil chemist" />
        <SmurfForm />
        <SmurfList />
      </div>
    );
  }
}

export default App;
