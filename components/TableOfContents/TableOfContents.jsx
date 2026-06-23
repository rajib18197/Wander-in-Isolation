"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./TableOfContents.module.css";

function extractHeadings(content) {
  const headingRegex = /^#{2,3}\s+(.+)$/gm;
  const headings = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const text = match[1];
    const level = match[0].match(/^#+/)[0].length;
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");

    headings.push({
      text,
      level,
      id,
    });
  }

  return headings;
}

export default function TableOfContents({ content }) {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState("");
  const observerRef = useRef(null);

  useEffect(() => {
    const extracted = extractHeadings(content);
    setHeadings(extracted);

    // Create Intersection Observer to track active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-64px 0px -60% 0px",
      }
    );

    // Observe all headings
    extracted.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    observerRef.current = observer;

    return () => {
      observer.disconnect();
    };
  }, [content]);

  if (headings.length === 0) {
    return null;
  }

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={styles.toc}>
      <h3 className={styles.heading}>On this page</h3>
      <ul className={styles.list}>
        {headings.map(({ text, level, id }) => (
          <li key={id} className={`${styles.item} ${styles[`level${level}`]}`}>
            <button
              onClick={() => handleClick(id)}
              className={`${styles.link} ${activeId === id ? styles.active : ""}`}
            >
              {text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
 