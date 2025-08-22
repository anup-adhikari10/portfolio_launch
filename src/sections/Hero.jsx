import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Hello, I’m <span>Anup Adhikari</span></h1>
        <h2>Frontend Developer & Computer Engineer</h2>
        <p>I love building beautiful, functional, and modern web applications.</p>
        <a href="#projects" className="btn">View My Work</a>
      </div>
    </section>
  );
}

export default Hero;