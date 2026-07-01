import "./Hero.css";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <p className="intro">
          Hello, I'm
        </p>

        <h1>
          RAJ
        </h1>

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
            ]}
            speed={45}
            repeat={Infinity}
          />

        </div>

        <p className="description">

          Passionate about Artificial Intelligence,
          Data Science, Machine Learning,
          FastAPI and Modern Web Development.

        </p>

        <div className="buttons">

          <button>

            View Projects

          </button>

          <button className="outline">

            Download Resume

          </button>

        </div>

      </div>

      <div className="hero-right">

        <div className="ai-placeholder">

          <div className="circle"></div>

          <span>AI CORE</span>

        </div>

      </div>

    </section>
  );
}

export default Hero;