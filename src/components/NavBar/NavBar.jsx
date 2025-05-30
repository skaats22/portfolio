// NavBar
import { NavLink, Link } from "react-router";
import { useState, useEffect } from "react";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="navbarContainer">
      <NavLink to="/">🏠 Home</NavLink>
      <span className="separator">|</span>
      <NavLink to="/projects">🚀 Projects</NavLink>
      <span className="separator">|</span>
      <NavLink to="/skills">🧠 Skills</NavLink>
      <span className="separator">|</span>
      <NavLink to="/contact">📞 Contact</NavLink>
    </div>
  );
}
