import React from "react";
import {Link} from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">CONTACT</Link>
      <Link to="/about_me">ABOUT ME</Link>
      <Link to="/projects">PROJECTS</Link>
    </nav>
  )
};

export default Nav;
