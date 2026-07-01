import { motion } from "framer-motion";
import {
  FiGithub,
  FiExternalLink
} from "react-icons/fi";

function ProjectCard({ project }) {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -12 }}
    >
      {/* Header */}

      <div className="project-header">

        <span className="module">
          MODULE_{String(project.id).padStart(2, "0")}
        </span>

        <span
          className={
            project.status === "ONLINE"
              ? "status online"
              : "status development"
          }
        >
          {project.status}
        </span>

      </div>

      {/* Image */}

      <div className="project-image">

        <img
          src={project.image}
          alt={project.title}
        />

      </div>

      {/* Content */}

      <div className="project-content">

        <h3>{project.title}</h3>

        <p>{project.description}</p>

      </div>

      {/* Technologies */}

      <div className="project-tech">

        {project.technologies.map((tech) => (
          <span key={tech}>
            {tech}
          </span>
        ))}

      </div>

      {/* Buttons */}

      <div className="project-buttons">

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="github-btn"
        >
          <FiGithub />
          GitHub
        </a>

        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="demo-btn"
        >
          <FiExternalLink />
          Live Demo
        </a>

      </div>
    </motion.div>
  );
}

export default ProjectCard;