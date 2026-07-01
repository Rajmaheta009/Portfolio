import "./AIStats.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaRobot, FaBrain, FaCode, FaGithub } from "react-icons/fa";

const stats = [
  { icon: <FaRobot />, title: "AI MODELS", status: "ONLINE", value: 12, suffix: "+" },
  { icon: <FaBrain />, title: "ML MODELS", status: "ACTIVE", value: 8, suffix: "+" },
  { icon: <FaCode />, title: "PROJECTS", status: "RUNNING", value: 25, suffix: "+" },
  { icon: <FaGithub />, title: "COMMITS", status: "SYNCED", value: 500, suffix: "+" },
];

// simple counter hook
function useCounter(end, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
}

function Counter({ value }) {
  const count = useCounter(value, 2000);
  return <>{count}</>;
}

function AIStats() {
  return (
    <section id="ai-stats" className="ai-stats">

      <motion.div
        className="stats-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span>AI SYSTEM</span>
        <h2>System Dashboard</h2>
      </motion.div>

      <div className="stats-grid">

        {stats.map((item, index) => (
          <motion.div
            key={index}
            className="dashboard-card"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
          >

            <div className="dashboard-header">

              <div className="dashboard-icon">
                {item.icon}
              </div>

              <div>
                <h3>{item.title}</h3>
                <p>{item.status}</p>
              </div>

            </div>

            <div className="progress">
              <div className="progress-bar"></div>
            </div>

            <div className="counter">
              <Counter value={item.value} />
              {item.suffix}
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default AIStats;