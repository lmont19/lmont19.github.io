import React from "react";
import profilepic from "../img/profilepic.jpeg";

function Navbar() {
  return (
    <nav id="navbar">
      <img src={profilepic} />
      <a href="#aboutme">About Me</a>
      <a href="#projects">Projects</a>
      <a href="https://github.com/lmont19" target="_blank" id="profile-link">
        Portfolio
      </a>
    </nav>
  );
}

export default Navbar;
