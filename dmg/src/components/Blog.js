import React, { Component } from "react";

class Blog extends Component {
  state = {
    hidden: false,
  };

  btnClick() {
    window.open("https://as.com/");
  }

  render() {
    return (
      <div className="blogComponent main-text">
        <div className="textBox main-text">
          If you're interested in reading my blog about changing career into
          software development and my time at Makers Academy, follow this link
          here!
        </div>
        <button className="button1" onClick={this.btnClick.bind(this)}>
          Blog Blog
        </button>
      </div>
    );
  }
}

export default Blog;
