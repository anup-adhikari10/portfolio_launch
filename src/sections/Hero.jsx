import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm <span className="highlight">Anup Adhikari</span></h1>

        <h2 className="hero-subtitle">
          <span className="typing-text">Computer Engineer | Data Science Student </span>
        </h2>

        <p className="hero-description">
          A data-driven developer specializing in full-stack solutions, with a strong interest in Data Science and analytics. 
          Focused on leveraging data, machine learning fundamentals, and user-centric design to build intelligent and impactful applications. </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn primary">Contact Me</a>
          <a href="#projects" className="btn secondary">View Projects</a>
        </div>
      </div>

      {/* Floating glowing balls in background */}
      <div className="glow glow1"></div>
      <div className="glow glow2"></div>
      <div className="glow glow3"></div>
    </section>
  );
}

export default Hero;