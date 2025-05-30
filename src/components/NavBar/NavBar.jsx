// NavBar
import { NavLink, Link } from "react-router";
import { useState, useEffect } from "react";
import "./NavBar.css"

export default function NavBar() {
  return (
    <div className="navbarContainer">
      <div><Link to="/">🏠 Home</Link></div>
      <div><Link to="/projects">🚀 Projects</Link></div>
      <div><Link to="/skills">🧠 Skills</Link></div>
      <div><Link to="/contact">📞 Contact</Link></div>
    </div>
  )
}