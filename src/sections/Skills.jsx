import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

export default function Skills() {
  const skills = [
    { name: "ML(Supervised & Unsupervised)", level: 75 },
    { name: "Data Prep & Feature Engineering", level: 90 },
    { name: "Deep Learning", level: 60 },
    { name: "Data Visualization", level: 80 },
    { name: "React.js", level: 90 },
    { name: "JavaScript (ES6+)", level: 85 },
    { name: "AI & LLMs", level: 55 },
    { name: "Python & Its Libraries", level: 80},
    { name: "Java Programming", level: 40 },
    { name: "HTML5 & CSS3", level: 95 },
    { name: "Flutter/Dart", level: 55},
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