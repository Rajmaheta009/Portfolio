import "./Project.css";
import { motion } from "framer-motion";

import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className="projects">

      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >

        <span className="section-tag">
          AI MODULES
        </span>

        <h2>
          Featured <span>Projects</span>
        </h2>

        <p>
          A collection of AI, Machine Learning, Full Stack and Automation
          projects built using modern technologies. Every project solves
          real-world problems and reflects my passion for intelligent software
          engineering.
        </p>

      </motion.div>

      <div className="projects-grid">

        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}

      </div>

    </section>
  );
}

export default Projects;