import React, { Component } from "react";
import "./App.css";

import Header from "./Header"
import SmurfForm from "./SmurfForm"
import SmurfList from "./SmurfList"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SmurfForm />
        <SmurfList />
      </div>
    );
  }
}

export default App;
