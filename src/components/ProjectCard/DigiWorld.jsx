import React from "react";
import "./ProjectCard.css";

const digiworldProject = {
  name: "DigiWorld - Digimon Collecting App",
  link: "https://digiworld-7531dba8c2f8.herokuapp.com/",
  description: `DigiWorld is a web app for Digimon enthusiasts to collect, trade, and manage their Digimon collection. The app features a user-friendly interface to browse Digimon, track owned creatures, and engage with other collectors.

Built with React for a fast and responsive frontend, Node.js and Express for the backend API, MongoDB with Mongoose for data persistence, and JWT for user authentication.`,
  technologies: ["React", "Node.js", "Express", "MongoDB", "Mongoose", "JWT"],
  role: "Designed and developed the full-stack app with features focused on seamless collection management, authentication, and real-time user interaction.",
  screenshots: [
    "https://imgur.com/IZAIg0X.jpg",
    "https://imgur.com/VMCHoT0.jpg",
    "https://imgur.com/Hd8KfsS.jpg",
  ],
};

export default function DigiWorld() {
  const { name, link, description, technologies, role, screenshots } =
    digiworldProject;

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
            alt={`DigiWorld screenshot ${idx + 1}`}
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
