import React, { Component } from "react";
import axios from "axios";
import Project from "./Project";
import request from "request";

class Projects extends Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    const clientId = process.env.GITHUB_CLIENT_ID;
    const secret = process.env.GITHUB_SECRET;
    console.log(secret);
    const options = {
      uri: `https://api.github.com/users/denriquem/repos?per_page=4&sort=created: asc&client_id${clientId}&client_secret${secret}`,
      method: "GET",
      headers: { "user-agent": "react.js" },
    };

    request(options, (error, response, body) => {
      if (error) console.error(error);
      const fourProjects = JSON.parse(body);

      const starred = fourProjects.filter((x) => x.stargazers_count > 0);
      const edited = fourProjects.splice(2, 1);
      this.setState({ projects: fourProjects });
      console.log(fourProjects);
    });

    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      const projectsShort = res.data.slice(0, 4);
      // this.setState({ projects: projectsShort });
      console.log(projectsShort);
    });
  }

  render() {
    const projects = this.state.projects.map((project) => {
      return (
        <Project
          key={project.id}
          title={project.name}
          description={project.description}
        />
      );
    });

    return (
      <div className="projects">
        <div className="projectHeader text-main light-text">
          Projects
          <link
            href="https://fonts.googleapis.com/css2?family=Lobster&family=Permanent+Marker&display=swap"
            rel="stylesheet"
          ></link>
        </div>
        <div className="container1">{projects}</div>
      </div>
    );
  }
}

export default Projects;
