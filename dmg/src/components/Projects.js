import React, { Component } from "react";
import axios from "axios";
import Project from "./Project";

class Projects extends Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      const projectsShort = res.data.slice(0, 4);
      this.setState({ projects: projectsShort });
      console.log(projectsShort);
    });
  }

  render() {
    const projects = this.state.projects.map((project) => {
      return <Project key={project.id} title={project.title} />;
    });

    return <div className="projects">{projects}/</div>;
  }
}

export default Projects;
