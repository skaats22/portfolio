const projects = [
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
    screenshots: [
      "https://imgur.com/IFuJtbJ.jpg",
      "https://imgur.com/V111mas.jpg",
      "https://imgur.com/WEq7Rg3.jpg",
      "https://imgur.com/Oof4R5D.jpg",
      "https://imgur.com/xEmkzDu.jpg",
    ],
  },
];

export default function American() {


  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: 20,
        borderRadius: 8,
        marginBottom: 30,
        maxWidth: 600,
      }}
    >
      <h2>American Roofing & Waterproofing</h2>
      <p>
        A full-stack website for American Roofing & Waterproofing designed not
        only as a marketing site but a lead generation engine and portfolio.
        Built with React + Vite, Tailwind CSS, MongoDB with Mongoose, Node.js,
        Express, AWS S3 for photo uploads, and JWT authentication for admin
        control.
      </p>
      <div style={{ display: "flex", gap: 12 }}>
        {screenshots.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`American Roofing screenshot ${idx + 1}`}
            style={{
              width: 180,
              height: 120,
              objectFit: "cover",
              borderRadius: 6,
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
}
