import "./Footer.css";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUp,
} from "react-icons/fi";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <motion.div
        className="footer-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Logo */}

        <div className="footer-logo">
          <h2>
            RAJ<span>.OS</span>
          </h2>

          <p>
            AI Engineer • Full Stack Developer • Machine Learning Enthusiast
          </p>
        </div>

        {/* Social */}

        <div className="footer-social">
          <a
            href="https://github.com/Rajmaheta009"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub />
          </a>

          <a
            href="https://linkedin.com/in/YOUR-LINKEDIN"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin />
          </a>

          <a href="mailto:raj@example.com">
            <FiMail />
          </a>
        </div>

        {/* Links */}

        <div className="footer-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Top Button */}

        <button className="top-btn" onClick={scrollToTop}>
          <FiArrowUp />
        </button>

        {/* Copyright */}

        <div className="footer-bottom">
          © {new Date().getFullYear()} Raj Mehta. All Rights Reserved.
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;