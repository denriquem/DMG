import React, { Component } from "react";
import Project from "./Project";
import request from "request";

class Projects extends Component {
  state = {
    projects: [],
    selectedPostId: null,
  };

  componentDidMount() {
    const clientId = process.env.GITHUB_CLIENT_ID;
    const secret = process.env.GITHUB_SECRET;
    const options = {
      uri: `https://api.github.com/users/denriquem/repos?per_page=4&sort=created: asc&client_id${clientId}&client_secret${secret}`,
      method: "GET",
      headers: { "user-agent": "react.js" },
    };

    request(options, (error, response, body) => {
      if (error) console.error(error);
      const fourProjects = JSON.parse(body);
      fourProjects.splice(2, 1);
      this.setState({ projects: fourProjects });
      console.log(fourProjects);
    });
  }

  postSelectHandler = async (id) => {
    console.log("are you there?");
    await this.setState({ selectedPostId: id });
    const rightId = this.state.projects.filter(
      (x) => x.id === this.state.selectedPostId
    );
    const correctObject = rightId.pop();
    const betterUrl = correctObject.url.replace("api.", "");
    const bestUrl = betterUrl.replace("/repos", "");
    window.open(bestUrl);
  };

  render() {
    const projects = this.state.projects.map((project) => {
      return (
        <Project
          key={project.id}
          title={project.name}
          description={project.description}
          clicked={() => this.postSelectHandler(project.id)}
        />
      );
    });

    return (
      <div className="projects">
        <div className="projectHeader text-main light-text">
          Projects
          <link
            href="https://fonts.googleapis.com/css2?family=Finger+Paint&display=swap"
            rel="stylesheet"
          ></link>
        </div>
        <div className="container1">{projects}</div>
      </div>
    );
  }
}

export default Projects;
