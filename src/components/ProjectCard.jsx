import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import "../sections/Projects.css";

function ProjectCard({ title, description, language, link, details, expanded, toggleExpand }) {
  return (
    <motion.div
      className="project-card"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <h3>{title}</h3>
      <p>{description}</p>

      {expanded && <p className="project-details">{details}</p>}

      <p className="lang">Language: {language}</p>

      <div className="project-links">
        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <FaGithub /> View on GitHub
        </motion.a>

        <button onClick={toggleExpand}>
          {expanded ? "Show Less" : "More Info"}
        </button>
      </div>
    </motion.div>
  );
}

export default ProjectCard;