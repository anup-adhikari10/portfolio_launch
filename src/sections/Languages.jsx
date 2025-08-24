import React from "react";
import "./Languages.css";

export default function Languages() {
  return (
    <section id="languages">
      <h2>🌐 Languages</h2>
      <div className="language-grid">
        <div className="language-card">
          <h3>Nepali</h3>
          <p>Native</p>
        </div>

        <div className="language-card">
          <h3>English</h3>
          <p>Fluent</p>
        </div>

        <div className="language-card">
          <h3>Hindi</h3>
          <p>Intermediate</p>
        </div>
      </div>
    </section>
  );
}