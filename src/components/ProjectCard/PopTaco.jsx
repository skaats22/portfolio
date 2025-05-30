import React from "react";
import "./ProjectCard.css";

const poptacoProject = {
  name: "Poptaco - Taco Stand Discovery App",
  link: "https://poptaco-77761f1153d9.herokuapp.com/",
  description: `Poptaco is a full-stack web app for discovering, reviewing, and managing taco stands. It features user authentication, CRUD operations, and a responsive UI.

Built with Node.js and Express using EJS templates for server-side rendering and SEO-friendly URLs. MongoDB and Mongoose are used for data models including TacoStand, Review, and User. The UI employs CSS with Flexbox and Grid for a responsive layout.`,
  technologies: [
    "Node.js",
    "Express",
    "EJS",
    "MongoDB",
    "Mongoose",
    "CSS",
    "Flexbox",
    "Grid",
  ],
  role: "Built full-stack app emphasizing secure CRUD operations and user-friendly design.",
  screenshots: [
    "https://imgur.com/5pCBKMc.jpg",
    "https://imgur.com/H91PsVa.jpg",
    "https://imgur.com/JY2I24q.jpg",
  ],
};

export default function Poptaco() {
  const { name, link, description, technologies, role, screenshots } =
    poptacoProject;

  return (
    <div
      className="projectCard"
      style={{
        border: "1px solid #ddd",
        padding: 20,
        borderRadius: 8,
        marginBottom: 30,
      }}
    >
      <h2>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#0070f3", textDecoration: "none" }}
        >
          {name}
        </a>
      </h2>

      <p style={{ whiteSpace: "pre-line", marginBottom: 16 }}>{description}</p>

      <h4>Technologies:</h4>
      <p>{technologies.join(", ")}</p>

      <p>
        <strong>Role:</strong> {role}
      </p>

      <div className="imgContainer">
        {screenshots.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Poptaco screenshot ${idx + 1}`}
            style={{
              width: 180,
              height: 120,
              objectFit: "cover",
              borderRadius: 6,
              cursor: "pointer",
              flexShrink: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}
