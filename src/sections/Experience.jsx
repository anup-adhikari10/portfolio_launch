import React from "react";
import "./Experience.css";

function Experience() {
  const jobs = [
    {
      role: "Frontend Developer Intern",
      company: "Tech Company",
      duration: "Jan 2024 - Jun 2024",
      desc: "Developed responsive UIs and integrated APIs with React.",
    },
    {
      role: "Freelance Web Developer",
      company: "Self-Employed",
      duration: "2023 - Present",
      desc: "Built custom websites and web apps for clients using modern stacks.",
    },
  ];

  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        {jobs.map((job, idx) => (
          <div key={idx} className="experience-card">
            <h3>{job.role}</h3>
            <span className="company">{job.company}</span>
            <span className="duration">{job.duration}</span>
            <p>{job.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;