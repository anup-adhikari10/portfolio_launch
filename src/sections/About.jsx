import React from "react";
import "./About.css";
import profileImg from "../assets/react.svg"; // replace with your image

function About() {
  return (
    <section className="about" id="about">
      <h2 className="about-title">About Me</h2>

      <div className="about-container">
        <div className="about-image">
          <img src={profileImg} alt="Anup Adhikari" />
        </div>

        <div className="about-text">
          <p>
            Hello! 👋 I'm <span className="highlight">Anup Adhikari</span>, a
            dedicated <span className="highlight">Software Engineer</span> with
            a background in <span className="highlight">Computer Engineering</span> and a current focus on
            mastering <span className="highlight">Data Science</span>.
          </p>

          <p>
            I specialize in building full-stack web applications using modern technologies like{" "}
            <span className="highlight">React</span>,{" "}
            <span className="highlight">Python</span>, and{" "}
            <span className="highlight">Node.js</span>. I have professional experience in
            <span className="highlight"> US Healthcare IT</span> and a passion for creating efficient,
            user-centered solutions.
          </p>

          <p>
            When I'm not coding, you can find me contributing to open-source, solving complex problems, or exploring the latest in tech and data. I'm always eager to take on new challenges and bring ideas to life. 🚀
          </p>

          <a href="/resume.pdf" className="cv-button" download>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;