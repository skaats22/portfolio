// Projects

import React from "react";
import American from "../../components/ProjectCard/American";
import DigiWorld from "../../components/ProjectCard/DigiWorld";
import Poptaco from "../../components/ProjectCard/PopTaco";
import Summarizer from "../../components/ProjectCard/Summarizer";

export default function Projects() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Projects</h1>
      <p style={{ textAlign: "center", marginBottom: "2rem" }}>
        Here are some key projects showcasing my blend of sales experience and
        technical skills.
      </p>
      <American />
      <Summarizer />
      <DigiWorld />
      <Poptaco />
    </div>
  );
}