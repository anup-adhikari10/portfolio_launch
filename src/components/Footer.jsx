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
          <a
            href="https://www.instagram.com/anup_adhikari11/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/anup-adhikari10"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/anup-adhikari-7541b81b9/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:adhikariianup10@gmail.com" aria-label="Email">
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