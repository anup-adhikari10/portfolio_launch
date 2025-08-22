import React from "react";
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About / Info */}
        <div className="footer-about">
          <h3 className="footer-logo">Anup Adhikari</h3>
          <p>
            Computer Engineer & Frontend Developer passionate about creating
            clean, modern, and user-friendly web applications.
          </p>
        </div>

        {/* Social Links */}
        <div className="footer-socials">
          <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://github.com/anupadhikari" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/anupadhikari" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:aadhikari31@student.ysu.edu">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Anup Adhikari • All Rights Reserved</p>
        <p className="built">Built with ❤️ using React</p>
      </div>
    </footer>
  );
}

export default Footer;