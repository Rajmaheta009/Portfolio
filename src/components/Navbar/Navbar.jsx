import "./Navbar.css";
import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";

function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 20);
    };

    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={scroll ? "navbar active" : "navbar"}>
      {/* Logo */}
      <a href="#hero" className="logo" onClick={closeMenu}>
        RAJ<span>.OS</span>
      </a>

      {/* Navigation */}
      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li>
          <a href="#hero" onClick={closeMenu}>
            Home
          </a>
        </li>

        <li>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
        </li>

        <li>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
        </li>

        <li>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
        </li>

        <li>
          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>
        </li>

        <li>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </li>
      </ul>

      {/* Resume Button */}
      <a href="/resume.pdf" download className="resume-btn">
        <FiDownload />
        Resume
      </a>

      {/* Mobile Menu */}
      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Navigation"
      >
        {menuOpen ? <HiX /> : <HiMenuAlt3 />}
      </button>
    </nav>
  );
}

export default Navbar;