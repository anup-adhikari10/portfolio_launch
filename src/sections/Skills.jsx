import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

export default function Skills() {
  const skills = [
    { name: "React.js", level: 90 },
    { name: "JavaScript (ES6+)", level: 85 },
    {name: "Python", level: 80},
    { name: "HTML5 & CSS3", level: 95 },
    {name: "Flutter/Dart", level: 55},
    { name: "Tailwind CSS", level: 85 },
    { name: "Framer Motion", level: 75 },
    { name: "Git & GitHub", level: 80 },
  ];

  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">💡 My Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, idx) => (
          <div key={idx} className="skill-card">
            <p>{skill.name}</p>
            <div className="skill-bar">
              <motion.div
                className="skill-progress"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}