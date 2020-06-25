import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export const Navbar = () => {
  return (
    <nav className="navbar sticky">
      <nav className="navbarLinks main-text">
        <Link
          activeClass="active"
          className="link"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={700}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          className="link"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={700}
        >
          About
        </Link>
        <Link
          activeClass="active"
          className="link"
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={700}
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          className="link"
          to="info"
          spy={true}
          smooth={true}
          offset={-70}
          duration={700}
        >
          Blog
        </Link>
        <Link
          activeClass="active"
          className="link"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={700}
        >
          Contact
        </Link>
      </nav>
    </nav>
  );
};

export default Navbar;
