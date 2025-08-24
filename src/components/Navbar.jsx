import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Anup Adhikari
        <img src={logo} alt="logo"/>
      </div> 
      <ul className="nav-links">
        <li><a href="#top">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#languages">Languages</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;