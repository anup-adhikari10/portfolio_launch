import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./ResearchPaper.css";

const researchPapers = [
  {
    title: "QR-based Canteen Management System",
    description: "Co-developed a secure QR-code solution to digitize food ordering, payment, and inventory tracking in campus canteens. Conducted user testing and feedback analysis to improve UI/UX, resulting in a 90% adoption rate among students.",
    link: "https://irojournals.com/itdw/article/view/6/3/1", 
    journal: "Journal of Information Technology and Digital World | 2024"
  }
];

export default function ResearchPapers() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="research" id="research">
      <h2 className="research-title">📄 Publications</h2>

      <div className="research-grid">
        {researchPapers.map((paper, idx) => (
          <motion.div
            key={idx}
            className="research-card"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <h3>{paper.title}</h3>
            <p>{paper.journal}</p>

            {expanded === idx && (
              <motion.p
                className="research-details"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {paper.description}
              </motion.p>
            )}

            <div className="research-links">
              <a href={paper.link} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt /> View Paper
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
    </section>
  );
}