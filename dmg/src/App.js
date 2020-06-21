import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Blog from "./components/Blog";
import Projects from "./components/Projects";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Blog />
      </div>
    );
  }
}

export default App;
