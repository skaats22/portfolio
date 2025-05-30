import React from "react";
import soon from "../../assets/soonimage.jpg";
import "./ProjectCard.css";

const summarizerProject = {
  name: "Sales Meeting Summarizer",
  link: "https://github.com/skaats22/summarizer",
  description: `A full-stack app that automates summarizing sales meeting notes and generates professional follow-up emails using large language models (LLMs).

The frontend is built with React and Vite for a fast, modern UI where users paste meeting notes and get summaries and follow-ups with one click.

The backend uses Django REST Framework exposing endpoints for summarization (Hugging Face Transformers) and email generation (Flan-T5). The app is containerized with separate frontend and backend folders for modularity.

I'm sharing my learning journey publicly with updates on models, UX, and future plans like user authentication, meeting history, and prompt tuning.`,
  technologies: [
    "React",
    "Vite",
    "Django REST Framework",
    "Hugging Face Transformers",
    "Flan-T5",
    "Docker",
  ],
  role: "Designed and built the full-stack app combining sales domain expertise and ML-driven automation.",
  screenshots: [soon],
};

export default function Summarizer() {
  const { name, link, description, technologies, role, screenshots } =
    summarizerProject;

  return (
    <div
      className="projectCard"
      style={{
        border: "1px solid #ddd",
        padding: 20,
        borderRadius: 8,
        marginBottom: 30,
        maxWidth: 600,
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

      <div
        style={{ display: "flex", gap: 12, marginTop: 16, overflowX: "auto" }}
      >
        {screenshots.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`${name} screenshot ${idx + 1}`}
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
