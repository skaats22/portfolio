// Footer
import { NavLink, Link } from "react-router";
import { useState, useEffect } from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <p className="copy">&copy; 2025 Steve Kaats</p>
      <p>This is my footer</p>
      <p>🌯</p>
    </div>
  );
}
