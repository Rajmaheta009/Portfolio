import "./Navbar.css";
import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";

function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {

      setScroll(window.scrollY > 20);

      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progressValue =
        (window.scrollY / totalHeight) * 100;

      setProgress(progressValue);

      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          setActive(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>

      <div
        className="scroll-progress"
        style={{ width: `${progress}%` }}
      ></div>

      <nav className={scroll ? "navbar active" : "navbar"}>

        <a href="#hero" className="logo">
          RAJ<span>.OS</span>
        </a>

        <ul className={menuOpen ? "nav-links open" : "nav-links"}>

          <li>
            <a
              href="#hero"
              className={active === "hero" ? "active-link" : ""}
              onClick={closeMenu}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className={active === "about" ? "active-link" : ""}
              onClick={closeMenu}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className={active === "skills" ? "active-link" : ""}
              onClick={closeMenu}
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className={active === "projects" ? "active-link" : ""}
              onClick={closeMenu}
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#experience"
              className={active === "experience" ? "active-link" : ""}
              onClick={closeMenu}
            >
              Experience
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className={active === "contact" ? "active-link" : ""}
              onClick={closeMenu}
            >
              Contact
            </a>
          </li>

        </ul>

        <a
          href="/resume.pdf"
          className="resume-btn"
        >
          <FiDownload />
          Resume
        </a>

        <div
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </div>

      </nav>

    </>
  );
}

export default Navbar;