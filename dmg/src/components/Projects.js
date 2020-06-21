import React, { Component } from "react";
import axios from "axios";
import Project from "./Project";
import request from "request";

class Projects extends Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    const clientId = "e49b037dba7346b4c870";
    const secret = "70a4b6b57f85ce2d139e803e83e45472f584bd2a";
    console.log(secret);
    const options = {
      uri: `https://api.github.com/users/denriquem/repos?per_page=5&sort=created: asc&client_id${clientId}&client_secret${secret}`,
      method: "GET",
      headers: { "user-agent": "node.js" },
    };

    request(options, (error, response, body) => {
      if (error) console.error(error);

      const res1 = response.toJSON(JSON.parse(body));
      console.log(res1.body);
    });

    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      const projectsShort = res.data.slice(0, 4);
      this.setState({ projects: projectsShort });
      // console.log(projectsShort);
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
