"use client";

import { useState } from "react";
import styles from "./ShareButtons.module.css";

export default function ShareButtons({ title, url }) {
  const [copied, setCopied] = useState(false);

  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      title
    )}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      url
    )}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`,
    hackernews: `https://news.ycombinator.com/submitlink?u=${encodeURIComponent(
      url
    )}&t=${encodeURIComponent(title)}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className={styles.shareButtons}>
      <span className={styles.shareLabel}>Share this article:</span>

      <a
        href={shareUrls.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.shareButton}
        aria-label="Share on Twitter"
      >
        𝕏
      </a>

      <a
        href={shareUrls.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.shareButton}
        aria-label="Share on LinkedIn"
      >
        in
      </a>

      <a
        href={shareUrls.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.shareButton}
        aria-label="Share on Facebook"
      >
        f
      </a>

      <a
        href={shareUrls.hackernews}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.shareButton}
        aria-label="Share on Hacker News"
      >
        Y
      </a>

      <button
        onClick={copyToClipboard}
        className={styles.shareButton}
        aria-label="Copy link"
      >
        {copied ? "✓" : "🔗"}
      </button>

      {copied && <span className={styles.copiedMessage}>Copied!</span>}
    </div>
  );
}
