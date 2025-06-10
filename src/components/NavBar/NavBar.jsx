//NavBar

import { NavLink, useLocation } from "react-router";
import { useState } from "react";
import "./NavBar.css";

const getPageTitle = (pathname) => {
  switch (pathname) {
    case "/":
      return "Home";
    case "/projects":
      return "Projects";
    case "/skills":
      return "Skills";
    case "/contact":
      return "Contact";
    default:
      return ""; // Or “Page not found” or empty
  }
};

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const pageTitle = getPageTitle(location.pathname);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbarContainer">
      <button
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className="bar top"></span>
        <span className="bar middle"></span>
        <span className="bar bottom"></span>
      </button>

      <div className="pageTitle">{pageTitle}</div>

      <div className={`navLinks ${isOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={() => setIsOpen(false)}>🏠 Home</NavLink>
        <span className="separator"> | </span>
        <NavLink to="/projects" onClick={() => setIsOpen(false)}>🚀 Projects</NavLink>
        <span className="separator"> | </span>
        <NavLink to="/skills" onClick={() => setIsOpen(false)}>🧠 Skills</NavLink>
        <span className="separator"> | </span>
        <NavLink to="/career" onClick={() => setIsOpen(false)}>💼 Career</NavLink>
        <span className="separator"> | </span>
        <NavLink to="/contact" onClick={() => setIsOpen(false)}>📞 Contact</NavLink>
      </div>
    </nav>
  );
}
