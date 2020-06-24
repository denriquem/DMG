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
        <div className="textBox main-text">
          If you're interested in reading my blog about changing career into
          software development and my time at Makers Academy, follow this link
          here! ===>
        </div>
        <div className="textBox main-text">
          If you want a more detailed account of my work so far, follow this
          liink to my Github CV
        </div>
        <button className="button1" onClick={this.btnClick}>
          Blog
        </button>
        <button className="button2" onClick={this.btnClick2}>
          GitHub CV
        </button>
      </div>
    );
  }
}

export default Blog;
