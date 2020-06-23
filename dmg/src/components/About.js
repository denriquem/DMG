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
          Here is some placeholder text about me. The fact is that I'm great and
          you should really give me a job and all. That's what I think but
          sometimes opinion is just not enough. The thing is if I told you even
          more about myself, that would be better.
        </div>
      </div>
    </div>
  );
};

export default About;