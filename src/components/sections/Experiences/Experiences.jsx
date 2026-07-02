import "./Experiences.css";
import { motion } from "framer-motion";
import experience from "../../../data/experience";

function Experience() {
  return (
    <section className="experience" id="experience">

      <motion.div
        className="experience-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
        viewport={{ once: true }}
      >
        <span className="section-tag">CAREER JOURNEY</span>

        <h2>
          My <span>Experience</span>
        </h2>

        <p>
          My journey from programming fundamentals to Artificial Intelligence,
          Full Stack Development and modern software engineering.
        </p>
      </motion.div>

      <div className="timeline">

        {experience.map((item, index) => (

          <motion.div
            className="timeline-item"
            key={item.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
          >

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <span className="timeline-year">
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