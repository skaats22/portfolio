// Footer
import { NavLink, Link } from "react-router";
import { useState, useEffect } from "react";
import "./Footer.css";
import linkedin from "../../assets/liblack.png";

export default function Footer() {
  return (
    <div className="footer">
      <p className="copy">&copy; 2025 Steve Kaats</p>
      <p>😃</p>
      <p className= "logo">
        <a
          href="https://linkedin.com/in/stevekaats"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="li logo" style={{ height: "44px" }} />
        </a>
      </p>
    </div>
  );
}
