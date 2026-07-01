import "./Footer.css";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUp
} from "react-icons/fi";

function Footer() {

  const scrollTop = () => {
    window.scrollTo({
      top:0,
      behavior:"smooth"
    });
  };

  return (

    <footer className="footer">

      <div className="footer-container">

        <div className="footer-left">

          <h2>
            RAJ<span>.OS</span>
          </h2>

          <p>

            AI Engineer • Machine Learning Engineer •
            Python Developer • React Developer

          </p>

        </div>

        <div className="footer-center">

          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footer-right">

          <a
            href="https://github.com/Rajmaheta009"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub/>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin/>
          </a>

          <a href="mailto:your@email.com">
            <FiMail/>
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        <p>

          © {new Date().getFullYear()} RAJ.OS
          • Built with React & ❤️

        </p>

        <button
          onClick={scrollTop}
          className="scroll-top"
        >

          <FiArrowUp/>

        </button>

      </div>

    </footer>

  );

}

export default Footer;