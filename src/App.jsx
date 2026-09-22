import React from "react";

const cards = [
  {
    title: "Dev server",
    body: "Vite dev server runs inside Docker Compose with host networking on port 5173.",
  },
  {
    title: "Alloy config",
    body: ".alloy/environment.json points at docker-compose.alloy.yaml and frontendPort 5173.",
  },
  {
    title: "Next steps",
    body: "Replace this placeholder with the real application code as the project grows.",
  },
];

export default function App() {
  return (
    <main
      style={{
        maxWidth: 880,
        margin: "0 auto",
        padding: "64px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 32,
      }}
    >
      <header style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <span
          style={{
            alignSelf: "flex-start",
            padding: "4px 10px",
            borderRadius: 999,
            background: "#e3ecf7",
            color: "#1d4f82",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: 0.2,
          }}
        >
          Alloy sandbox ready
        </span>
        <h1 style={{ margin: 0, fontSize: 40, lineHeight: 1.1 }}>Fiasco</h1>
        <p style={{ margin: 0, fontSize: 17, color: "#4a5a69", maxWidth: 560 }}>
          This repository was empty, so it now ships a minimal React + Vite
          frontend that boots through the checked-in Alloy Docker Compose setup.
        </p>
      </header>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 16,
        }}
      >
        {cards.map((card) => (
          <article
            key={card.title}
            style={{
              background: "#ffffff",
              border: "1px solid #e1e6ec",
              borderRadius: 12,
              padding: 20,
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <h2 style={{ margin: 0, fontSize: 17 }}>{card.title}</h2>
            <p style={{ margin: 0, fontSize: 14, color: "#55646f", lineHeight: 1.5 }}>
              {card.body}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
