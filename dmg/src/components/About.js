import React from "react";

export const About = () => {
  return (
    <div className="about">
      <div className="aboutHeading">
        About Me
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');
        </style>
      </div>
      <div className="card">
        <div className="photo"></div>
        <div className="bio main-text">
          Hi, my name is Daniel Martinez-Gatell. I'm a full stack software
          developer with a background in cogntiive neuroscience. I specialise in
          React and full stack MERN projects. I also have experience using Ruby,
          Rails and Sinatra. Below you can find more information on three of my
          most recent projects.
        </div>
      </div>
    </div>
  );
};

export default About;
