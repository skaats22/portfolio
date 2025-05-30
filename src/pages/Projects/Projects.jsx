// Projects

import React from "react";
import American from "../../components/ProjectCard/American";
import DigiWorld from "../../components/ProjectCard/DigiWorld";
import Poptaco from "../../components/ProjectCard/PopTaco";
import Summarizer from "../../components/ProjectCard/Summarizer";

const projects = [
  {
    name: "Sales Meeting Summarizer",
    link: "#", // add your repo or demo link here
    description: `One of the projects I’m really proud of is a Sales Meeting Summarizer I've been building, which combines my background in sales with my technical skills. The app automates summarizing meeting notes and generating follow-up emails using large language models (LLMs).

On the frontend, I used React with Vite for a fast, modern UI. Users paste meeting notes and get a summary and professional follow-up email with one click.

The backend uses Django REST Framework exposing two endpoints: /summarize/ (using Hugging Face Transformers) and /email/ (using Flan-T5). The app is containerized into separate frontend and backend folders for modularity.

I’m sharing my learning journey on LinkedIn in a "Learning in Public" series, posting updates about models tested, UX improvements, and plans to add user auth, meeting history, and prompt tuning.`,
    technologies: [
      "React",
      "Vite",
      "Django REST Framework",
      "Hugging Face Transformers",
      "Flan-T5",
      "Docker",
    ],
    role: "Designed and built the full-stack app combining sales domain expertise and ML-driven automation.",
  },
  {
    name: "American Roofing & Waterproofing Website",
    link: "https://american-roofing.herokuapp.com",
    description: `A full-stack website designed as a lead generation engine, customer review hub, and portfolio for a roofing business. The site allows photo uploads, customer reviews, and admin management.

Built with React + Vite frontend, Tailwind CSS styling, MongoDB + Mongoose backend, Node.js + Express API, AWS S3 for photo storage, EmailJS for notifications, and JWT-based authentication.

Optimized for mobile and performance, the project gave me experience with authentication, cloud storage, RESTful API design, and deployment.`,
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "MongoDB",
      "Node.js",
      "Express",
      "AWS S3",
      "EmailJS",
      "JWT",
    ],
    role: "Developed full-stack website focused on dynamic content, security, and UX for a small business.",
  },
  {
    name: "Poptaco",
    link: "https://poptaco-77761f1153d9.herokuapp.com/",
    description: `A full-stack web app to discover, review, and manage taco stands. Features include user authentication/authorization, CRUD operations, and responsive UI.

Built using Node.js + Express with EJS templates for server-side rendering and SEO-friendly URLs. MongoDB + Mongoose manage data models for TacoStand, Review, and User. CSS with Flexbox and Grid ensure a responsive layout.

This project deepened my understanding of secure data handling, session management, and creating usable, attractive interfaces.`,
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
    role: "Built full-stack app emphasizing secure CRUD and user-friendly design.",
  },
  {
    name: "DigiWorld",
    link: "https://digiworld-7531dba8c2f8.herokuapp.com/",
    description: `A collaborative group project built with Django and PostgreSQL that lets users build and manage their own Digifarm to collect and raise favorite Digimon partners. The app consumes a Digimon API to fetch data dynamically.

This project showcased teamwork, API integration, and backend data management, while delivering a fun and interactive experience for Digimon fans.`,
    technologies: [
      "Django",
      "PostgreSQL",
      "Digimon API",
      "Python",
      "REST APIs",
    ],
    role: "Contributed backend features, API integration, and database design in a team environment.",
  },
];

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
