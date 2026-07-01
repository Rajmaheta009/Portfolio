import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Contact",
  ];

  return (
    <header className="navbar">

      <div className="logo">
        RAJ<span>OS</span>
      </div>

      <nav className={menuOpen ? "nav active" : "nav"}>
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </a>
        ))}

        <button className="resume-btn">
          Resume
        </button>
      </nav>

      <div
        className="mobile-menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

    </header>
  );
}

export default Navbar;