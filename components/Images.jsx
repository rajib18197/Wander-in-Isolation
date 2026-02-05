"use client";

import NextImage from "next/image";

export default function Image({
  src,
  alt,
  caption,
  width = 800,
  height = 450,
  priority = false,
}) {
  return (
    <figure style={{ margin: "2.5rem 0", textAlign: "center" }}>
      <NextImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        style={{
          maxWidth: "100%",
          height: "auto",
          borderRadius: "10px",
        }}
      />
      {caption && (
        <figcaption
          style={{
            marginTop: "0.6rem",
            fontSize: "0.9rem",
            color: "#666",
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
