import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Blog from "./components/Blog";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home id="home" />
        <About id="about" />
        <Projects id="projects" />
        <Blog id="info" />
        <Contact id="contact" />
      </div>
    );
  }
}

export default App;
