import React from "react";
import "./Skills.css";

const skillsData = [
  { name: "Python", level: 80 },
  { name: "JavaScript", level: 90 },
  { name: "HTML", level: 100 },
  { name: "CSS", level: 85 },
  { name: "Node.js", level: 60 },
  { name: "SQL / Oracle", level: 90 },
  { name: "Git", level: 80 },
  { name: "Flutter/Dart", level: 50 },
  // 👉 add more if you like
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">My Skills</h2>
      <p className="skills-subtitle">
        A quick visual representation of my technical skillset.
      </p>

      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div className="skill" key={index}>
            <span className="skill-name">{skill.name}</span>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;