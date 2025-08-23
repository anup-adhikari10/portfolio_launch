import React from "react";
import "./Experience.css";

function Experience() {
  const experiences = [
    {
      role: "Software Engineer + US Healthcare Trainee",
      company: "Infinite Computer Solutions",
      date: "Jan 2025 – Apr 2025",
      details: [
        "Developed healthcare applications using Java, Python, Oracle, and MSSQL in a DevOps-integrated environment.",
        "Trained in US healthcare compliance, data security, and electronic health records (EHR) systems.",
        "Communicated with clients to gather requirements, deliver technical updates, and prepare reports.",
        "Collaborated in a cross-functional team, improving efficiency by 20%.",
      ],
    },
    {
      role: "Software Engineer",
      company: "MarginTop Solutions Pvt Ltd",
      date: "Dec 2023 – Dec 2024",
      details: [
        "Built front-end applications with ReactJS and back-end APIs using Python.",
        "Enhanced software architecture and automated deployment pipelines in an Agile setup.",
        "Led a 3-member team, delivering a client project 2 weeks ahead of schedule.",
        "Improved app performance by 30% through optimization and refactoring.",
      ],
    },
    {
      role: "Volunteer Instructor",
      company: "Gorkha Polytechnic Institute",
      date: "May 2023 – Oct 2023",
      details: [
        "Taught programming fundamentals (Python, JavaScript, web development) to 50+ students.",
        "Designed 10+ practical lab exercises reinforcing OOP and algorithms.",
        "Mentored 5 standout students who later secured internships at tech firms.",
        "Organized workshops on career development and problem-solving skills.",
      ],
    },
    {
      role: "Networking Engineering Intern",
      company: "Nepal Telecom",
      date: "Jan 2023 – Apr 2023",
      details: [
        "Assisted in network troubleshooting, router configurations, and customer support.",
        "Contributed to a 15% reduction in downtime through proactive maintenance.",
        "Resolved 50+ broadband-related tickets, achieving 95% satisfaction.",
        "Documented networking issues and proposed scalable solutions.",
      ],
    },
  ];

  return (
    <section className="experience" id="experience">
      <h2 className="experience-title">Professional Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="timeline-content">
              <h3 className="role">{exp.role}</h3>
              <h4 className="company">{exp.company}</h4>
              <span className="date">{exp.date}</span>
              <ul>
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;