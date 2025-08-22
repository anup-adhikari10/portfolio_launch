import React from "react";
import "./About.css";
import profile from "../assets/react.svg";

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img src={profile} alt="Profile" />
        <p>
          I am a passionate computer engineer and frontend developer with
          experience in building responsive, user-friendly web applications.
          Skilled in React, JavaScript, and modern web technologies.
        </p>
      </div>
    </section>
  );
}

export default About;