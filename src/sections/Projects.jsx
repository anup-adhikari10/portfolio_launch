import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import projects from "../data/Projects";
import ProjectCard from "../components/ProjectCard"; // import the reusable card
import "./Projects.css";

export default function Projects() {
  const [showMore, setShowMore] = useState(false);
  const [expanded, setExpanded] = useState(null);

  const visibleProjects = showMore ? projects : projects.slice(0, 8);

  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">🚀 My Projects</h2>

      <div className="projects-grid">
        {visibleProjects.map((proj, idx) => (
          <ProjectCard
            key={idx}
            title={proj.title}
            description={proj.description}
            language={proj.language}
            link={proj.link}
            details={proj.details}
            expanded={expanded === idx}
            toggleExpand={() => setExpanded(expanded === idx ? null : idx)}
          />
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