// NavBar
import { NavLink } from "react-router";
import { useState } from "react";
import "./NavBar.css";

export default function NavBar({ pageTitle = "My Page" }) {
  const [isOpen, setIsOpen] = useState(false);

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

      {/* Page title centered next to hamburger on small screens */}
      <div className="pageTitle">{pageTitle}</div>

      <div className={`navLinks ${isOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={() => setIsOpen(false)}>🏠 Home </NavLink>
        <span className="separator"> | </span>
        <NavLink to="/projects" onClick={() => setIsOpen(false)}>🚀 Projects </NavLink>
        <span className="separator"> | </span>
        <NavLink to="/skills" onClick={() => setIsOpen(false)}>🧠 Skills </NavLink>
        <span className="separator"> | </span>
        <NavLink to="/contact" onClick={() => setIsOpen(false)}>📞 Contact </NavLink>
      </div>
    </nav>
  );
}
