import "./AIStats.css";
import { motion } from "framer-motion";
import {
  FaRobot,
  FaLaptopCode,
  FaProjectDiagram,
  FaGitAlt,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaRobot />,
    number: "10+",
    title: "AI Models",
  },
  {
    icon: <FaLaptopCode />,
    number: "15+",
    title: "Technologies",
  },
  {
    icon: <FaProjectDiagram />,
    number: "20+",
    title: "Projects",
  },
  {
    icon: <FaGitAlt />,
    number: "500+",
    title: "Git Commits",
  },
];

function AIStats() {
  return (
    <section id="ai-stats" className="ai-stats">
      <motion.div
        className="stats-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span>AI SYSTEM STATUS</span>

        <h2>Core Statistics</h2>

        <p>
          Real-world experience gained by building AI applications, Machine
          Learning models, Full Stack software and intelligent automation.
        </p>
      </motion.div>

      <div className="stats-grid">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            className="stats-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
          >
            <div className="stats-icon">{item.icon}</div>

            <h2>{item.number}</h2>

            <p>{item.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default AIStats;