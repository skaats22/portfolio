// Projects

import React from "react";
import American from "../../components/ProjectCard/American";
import DigiWorld from "../../components/ProjectCard/DigiWorld";
import Poptaco from "../../components/ProjectCard/PopTaco";
import Summarizer from "../../components/ProjectCard/Summarizer";
import "./Projects.css";

export default function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <h3>
        Here are some key projects showcasing my blend of sales experience and
        technical skills.
      </h3>
      <div className="body">
        <div className="projectCards">
          <American />
          <DigiWorld />
          <Summarizer />
          <Poptaco />
        </div>
      </div>
    </>
  );
}
