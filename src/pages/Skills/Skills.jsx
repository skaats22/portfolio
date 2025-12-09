// Skills.jsx
import "./Skills.css";
import uscLogo from "../../assets/usc-logo.png";
import galogo from "../../assets/galogo.webp";
import stanfordlogo from "../../assets/stanfordlogo.jpg";
import gcpLogo from "../../assets/gcpLogo.png"
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
            <li><FaJs /> JavaScript, TypeScript</li>
            <li><FaPython /> Python</li>
            <li><FaReact /> React, Django Templates, Tailwind CSS, HTML</li>
            <li><FaNodeJs /> Django, Node.js, Express.js</li>
            <li><FaDatabase /> PostgreSQL, MongoDB</li>
            <li><b>Tools:</b>Git, GitHub, RESTful APIs, OAuth, Telnyx API, Webhooks, Vercel</li>
            <li><b>Machine Learning:</b>Regression, Neural Nets, Decision Trees, Model Evaluation</li>
            <li><b>Product & System:</b>Payment flows, AI outbound automation, event-driven apps</li>
          </ul>
        </div>

        <div className="educationColumn">
          <h3>Education & Certifications</h3>
          <ul>
            <li>
              <strong>B.A. Neuroscience,</strong>USC
              <img src={uscLogo} alt="USC Logo" className="edu-logo" />
            </li>
            <li>
              <strong>Software Engineering Immersive,</strong>General Assembly
              <img src={galogo} alt="GA Logo" className="edu-logo" />
            </li>
            <li>
              <strong>Google Cloud Digital Leader,</strong>Google Cloud Platform
              <img src={gcpLogo} alt="GCP Logo" className="edu-logo" />
            </li>
            <li>
              <strong>Machine Learning Specialization,</strong>Stanford Online
              <img src={stanfordlogo} alt="Stanford Logo" className="edu-logo" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
