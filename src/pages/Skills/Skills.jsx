// Skills.jsx
import "./Skills.css";
import uscLogo from "../../assets/usc-logo.png";
import galogo from "../../assets/galogo.webp";
import stanfordlogo from "../../assets/stanfordlogo.jpg";
import Timeline from "../../components/Timeline/Timeline";
import { FaPython, FaReact, FaDatabase, FaNodeJs, FaJs } from "react-icons/fa";

export default function Skills() {
  return (
    <div className="skillsSection">
      <h1 className="sectionTitle">Skills & Education</h1>

      <div className="skillsWrapper">
        <div className="skillsColumn">
          <h3>Technical Skills</h3>
          <ul>
            <li><FaJs /> JavaScript</li>
            <li><FaPython /> Python</li>
            <li><FaReact /> React, Django Templates</li>
            <li><FaNodeJs /> Django, Node.js, Express.js</li>
            <li><FaDatabase /> PostgreSQL, MongoDB</li>
            <li>Tools: Git, GitHub, Vite, RESTful APIs, OAuth</li>
            <li>Machine Learning: Regression, Neural Nets, Decision Trees, Model Evaluation</li>
          </ul>
        </div>

        <div className="educationColumn">
          <h3>Education & Certifications</h3>
          <ul>
            <li>
              <strong>B.A. Neuroscience,</strong>USC
              <img src={uscLogo} alt="USC" className="edu-logo" />
            </li>
            <li>
              <strong>Software Engineering Immersive,</strong>General Assembly
              <img src={galogo} alt="GA" className="edu-logo" />
            </li>
            <li>
              <strong>Machine Learning Specialization,</strong>Stanford Online
              <img src={stanfordlogo} alt="Stanford" className="edu-logo" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
