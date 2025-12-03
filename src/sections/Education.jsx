import React from "react";
import "./Education.css";

export default function Education() {
  return (
    <section id="education">
      <h2>🎓 Education</h2>
      <div className="education-card">
        <h3>Youngstown State University, USA</h3>
        <p>Master of Science in Data Science and Statistics (Ongoing)</p>
        <p>2025 – Present</p>
      </div>

      <div className="education-card">
        <h3>Tribhuvan University, Nepal</h3>
        <p>Bachelor of Engineering in Computer Engineering</p>
        <p>2018 – 2023</p>
      </div>
    </section>
  );
}