import React, { useState } from "react";
import { motion } from "framer-motion";
import certifications from "../data/Certifications";
import "./Certifications.css";

export default function Certifications() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="certifications" id="certifications">
      <h2 className="certifications-title">🏆 Certifications</h2>

      <div className="certifications-grid">
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            className="certification-card"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <h3>{cert.title}</h3>

            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-link"
            >
              View Certificate
            </a>

            <button
              onClick={() =>
                setExpanded(expanded === idx ? null : idx)
              }
            >
              {expanded === idx ? "Show Less" : "More Info"}
            </button>

            {expanded === idx && (
              <motion.p
                className="certification-details"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {cert.details}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}