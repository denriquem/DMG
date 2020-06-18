import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>This seems to be working?</p>
        <Home />
      </div>
    );
  }
}

export default App;
