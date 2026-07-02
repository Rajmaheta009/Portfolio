import "./About.css";
import { motion } from "framer-motion";
import { FiDownload, FiMail } from "react-icons/fi";

function About() {
  return (
    <section id="about" className="about">

      <div className="about-container">

        {/* LEFT SIDE */}

        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <span className="section-tag">
            SYSTEM PROFILE
          </span>

          <h2>
            About <span>Me</span>
          </h2>

          <p>
            I'm <strong>Raj</strong>, an aspiring AI Engineer passionate
            about building intelligent software using Machine Learning,
            Artificial Intelligence and modern web technologies.
          </p>

          <p>
            I enjoy solving real-world problems through automation,
            scalable backend systems and interactive frontend
            applications.
          </p>

          <p>
            My current focus is becoming a world-class AI Engineer while
            mastering Python, FastAPI, React, LLMs, RAG, Docker,
            PostgreSQL and cloud technologies.
          </p>

          <div className="about-buttons">

            <a href="/resume.pdf" className="primary-btn">
              <FiDownload />
              Resume
            </a>

            <a href="#contact" className="secondary-btn">
              <FiMail />
              Contact Me
            </a>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div className="profile-card">

            <div className="status">
              <span className="dot"></span>
              ONLINE
            </div>

            <h3>RAJ</h3>

            <h4>AI Engineer</h4>

            <div className="stats">

              <div className="stat-box">
                <h2>20+</h2>
                <p>Projects</p>
              </div>

              <div className="stat-box">
                <h2>15+</h2>
                <p>Technologies</p>
              </div>

              <div className="stat-box">
                <h2>1+</h2>
                <p>Years Learning</p>
              </div>

              <div className="stat-box">
                <h2>∞</h2>
                <p>Curiosity</p>
              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default About;