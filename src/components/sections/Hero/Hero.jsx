import "./Hero.css";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiArrowRight, FiDownload } from "react-icons/fi";

import AICore from "../../effects/AICore/AICore";

function Hero() {
  return (
    <section id="hero" className="hero">

      <div className="hero-left">

        <motion.div
          className="status"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          ● AI CORE ONLINE
        </motion.div>

        <motion.p
          className="intro"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          RAJ
        </motion.h1>

        <div className="typing">
          <TypeAnimation
            sequence={[
              "AI Engineer",
              2000,
              "Machine Learning Engineer",
              2000,
              "Python Developer",
              2000,
              "React Developer",
              2000,
              "Full Stack Developer",
              2000,
            ]}
            speed={40}
            repeat={Infinity}
          />
        </div>

        <motion.p
          className="hero-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          I build intelligent applications using Artificial Intelligence,
          Machine Learning, Python, FastAPI and modern React technologies.

          My goal is to create products that solve real-world problems through
          automation and smart software engineering.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >

          <a href="/resume.pdf" download className="primary-btn">
            <FiDownload />
            Resume
          </a>

          <a href="#projects" className="secondary-btn">
            <FiArrowRight />
            View Projects
          </a>

        </motion.div>

      </div>

      <div className="hero-right">
        <AICore />
      </div>

    </section>
  );
}

export default Hero;