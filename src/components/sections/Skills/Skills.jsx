import "./Skills.css";

import { FaPython, FaReact, FaJava, FaDocker, FaGitAlt } from "react-icons/fa";

import {
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiTensorflow,
  SiPytorch,
} from "react-icons/si";

const skills = [
  {
    icon: <FaPython />,
    title: "Python",
    status: "ONLINE",
    level: "Advanced",
    version: "3.x",
  },
  {
    icon: <FaReact />,
    title: "React",
    status: "ONLINE",
    level: "Advanced",
    version: "19",
  },
  {
    icon: <SiFastapi />,
    title: "FastAPI",
    status: "ONLINE",
    level: "Advanced",
    version: "Latest",
  },
  {
    icon: <SiPostgresql />,
    title: "PostgreSQL",
    status: "ONLINE",
    level: "Advanced",
    version: "16",
  },
  {
    icon: <SiMongodb />,
    title: "MongoDB",
    status: "ONLINE",
    level: "Intermediate",
    version: "Latest",
  },
  {
    icon: <SiTensorflow />,
    title: "TensorFlow",
    status: "ONLINE",
    level: "Intermediate",
    version: "2.x",
  },
  {
    icon: <SiPytorch />,
    title: "PyTorch",
    status: "ONLINE",
    level: "Intermediate",
    version: "2.x",
  },
  {
    icon: <FaJava />,
    title: "Java",
    status: "ONLINE",
    level: "Intermediate",
    version: "21",
  },
  {
    icon: <FaDocker />,
    title: "Docker",
    status: "ONLINE",
    level: "Intermediate",
    version: "Latest",
  },
  {
    icon: <FaGitAlt />,
    title: "Git",
    status: "ONLINE",
    level: "Advanced",
    version: "2.x",
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-header">
        <span>SYSTEM MODULES</span>

        <h2>Technical Skills</h2>

        <p>
          Technologies powering intelligent software, machine learning and
          scalable web applications.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>

            <h3>{skill.title}</h3>

            <div className="skill-info">
              <p>
                <span>Status</span>

                {skill.status}
              </p>

              <p>
                <span>Level</span>

                {skill.level}
              </p>

              <p>
                <span>Version</span>

                {skill.version}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
