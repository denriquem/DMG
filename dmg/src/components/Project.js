import React from "react";

const Project = (props) => (
  <article className="project main-text">
    <h1 className="light-text">{props.title}</h1>
    <div className="info">
      <div className="description light-text">{props.description}</div>
    </div>
  </article>
);

export default Project;
