import React, { Component } from "react";

class Blog extends Component {
  state = {
    hidden: false,
  };

  btnClick = () => {
    window.open("https://medium.com/@demartinezgatell");
  };

  btnClick2 = () => {
    window.open("https://github.com/denriquem/CV");
  };

  render() {
    return (
      <div className="blogComponent main-text">
        <div className="card2">
          <div className="textBox2 main-text">
            If you're interested in reading my blog about changing career into
            software development and my time at Makers Academy, follow me here.
            <button className="button1" onClick={this.btnClick}>
              Blog
            </button>
          </div>
          <div className="textBox2 main-text">
            If you want a more detailed account of my work so far, follow this
            liink to my Github CV
            <button className="button2" onClick={this.btnClick2}>
              GitHub CV
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
