// Skills

import "./Skills.css";
import uscLogo from "../../assets/usc-logo.png";
import galogo from "../../assets/galogo.webp";
import stanfordlogo from "../../assets/stanfordlogo.jpg";

export default function Skills() {
  return (
    <>
      <h1>Skills & Education</h1>
      <div className="skillsContainer">
        <div className="hard">
          <ul>
            <li>
              <b>Programming Languages</b>: JavaScript, Python
            </li>
            <li>
              <b>Frontend</b>: React, Django Templates (server-rendered
              HTML/CSS/JS), HTML5, CSS3
            </li>
            <li>
              <b>Backend</b>: Django, Node.js, Express.js
            </li>
            <li>
              <b>Databases</b>: PostgreSQL, MongoDB
            </li>
            <li>
              <b>Tools & Technologies</b>: Git, GitHub, Vite, RESTful APIs,
              OAuth
            </li>
            <li>
              <b>Machine Learning</b>: Supervised and unsupervised learning,
              linear/logistic regression, neural networks, decision trees, and
              model evaluation techniques
            </li>
            <br />
            <li>
              <b>Education:</b>
              <ul>
                <li>
                  B.A. in Neuroscience, University of Southern California{" "}
                  <img
                    src={uscLogo}
                    alt="USC logo"
                    style={{ height: "28px" }}
                  />
                </li>
                <li>
                  Software Engineering Immersive, General Assembly (12-weeks,
                  Full-Time){" "}
                  <img src={galogo} alt="GA logo" style={{ height: "28px" }} />
                </li>
                <li>
                  Machine Learning Specialization, Stanford Online (100 hours){" "}
                  <img
                    src={stanfordlogo}
                    alt="GA logo"
                    style={{ height: "28px" }}
                  />
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* <div className="soft">
          <h3>Soft Skills</h3>
          <ul>
            <li>Enterprise Sales & Account Management</li>
            <li>Client Relationship Building</li>
            <li>Strategic Business Development</li>
            <li>Cross-functional Collaboration</li>
            <li>Consultative & Challenger Sales Approaches</li>
            <li>Translating Business Needs into Technical Solutions</li>
          </ul>
        </div> */}
      </div>
    </>
  );
}
