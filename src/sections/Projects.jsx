import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import projects from "../data/Projects";
import "./Projects.css";

export default function Projects() {
  const [showMore, setShowMore] = useState(false);
  const [expanded, setExpanded] = useState(null);

  const visibleProjects = showMore ? projects : projects.slice(0, 6);

  return (
    <section className="projects" id = "projects">
      <h2 className="projects-title">🚀 My Projects</h2>

      <div className="projects-grid">
        {visibleProjects.map((proj, idx) => (
          <motion.div
            key={idx}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>

            {expanded === idx && (
              <motion.p
                className="project-details"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {proj.details}
              </motion.p>
            )}

            <p className="lang">Language: {proj.language}</p>

            <div className="project-links">
              <a href={proj.link} target="_blank" rel="noopener noreferrer">
                <FaGithub /> View on GitHub
              </a>
              <button
                onClick={() =>
                  setExpanded(expanded === idx ? null : idx)
                }
              >
                {expanded === idx ? "Show Less" : "More Info"}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <button
        className="show-more-btn"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "Show Less Projects" : "Show More Projects"}
      </button>
    </section>
  );
}