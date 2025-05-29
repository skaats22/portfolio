

// SalesMeetingSummarizerCard.jsx
export default function SalesMeetingSummarizerCard() {
  const screenshots = [
    "https://i.imgur.com/yourimage1.jpg",
    "https://i.imgur.com/yourimage2.jpg",
    "https://i.imgur.com/yourimage3.jpg",
  ];

  return (
    <div style={{ border: "1px solid #ccc", padding: 16, borderRadius: 8, marginBottom: 24 }}>
      <h2>Sales Meeting Summarizer</h2>
      <p>
        One of the projects I’m really proud of is a Sales Meeting Summarizer I've been building, which combines my background in sales with my technical skills...
      </p>
      <div style={{ display: "flex", gap: 10 }}>
        {screenshots.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Sales Meeting Summarizer screenshot ${i + 1}`}
            style={{ width: 150, height: 100, objectFit: "cover", borderRadius: 6, cursor: "pointer" }}
          />
        ))}
      </div>
      {/* Add your repo/demo links below if you want */}
    </div>
  );
}
