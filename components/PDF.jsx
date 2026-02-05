"use client";

export default function PDF({ src, title, height = 700 }) {
  return (
    <section style={{ margin: "3rem 0" }}>
      {title && <h4 style={{ marginBottom: "0.5rem" }}>{title}</h4>}

      <iframe
        src={src}
        width="100%"
        height={height}
        style={{
          border: "1px solid rgba(0,0,0,0.1)",
          borderRadius: "8px",
        }}
      />
    </section>
  );
}
