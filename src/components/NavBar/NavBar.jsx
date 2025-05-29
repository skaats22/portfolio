// NavBar
import { NavLink, Link } from "react-router";
import { useState, useEffect } from "react";

export default function NavBar() {
  return (
    <ul>
      <Link to="/"><li>Home</li></Link>
      <Link to="/about"><li>About Me</li></Link>
      <Link to="/projects"><li>Projects</li></Link>
      <Link to="/skills"><li>Skills</li></Link>
      <Link to="/contact"><li>Contact</li></Link>
    </ul>
  )
}