import "./Experiences.css";
import { motion } from "framer-motion";
import experience from "../../data/experience";

function Experience() {
  return (
    <section id="experience" className="experience">

      <div className="experience-header">

        <span>CAREER LOG</span>

        <h2>
          My <span>Journey</span>
        </h2>

        <p>
          Every project and every challenge has helped me grow into an AI
          Engineer focused on building intelligent software.
        </p>

      </div>

      <div className="timeline">

        {experience.map((item, index) => (

          <motion.div
            className="timeline-item"
            key={item.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            <div className="timeline-content">

              <span className="year">
                {item.year}
              </span>

              <h3>{item.title}</h3>

              <h4>{item.company}</h4>

              <p>{item.description}</p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Experience;