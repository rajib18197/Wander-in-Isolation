// utils/generate-rss.js or lib/generate-rss.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function generateRssFeed(articles) {
  const siteUrl = "http://localhost:3000/"; // Replace with your actual domain
  const author = "Rajib Das"; // Replace with your name

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${author}'s Blog</title>
    <link>${siteUrl}</link>
    <description>Articles about web development, programming, and technology</description>
    <language>en</language>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
    ${articles
      .map((article) => {
        return `
    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${siteUrl}/articles/${article.slug}</link>
      <description>${escapeXml(
        article.description || article.excerpt || ""
      )}</description>
      <pubDate>${new Date(article.date).toUTCString()}</pubDate>
      <guid>${siteUrl}/articles/${article.slug}</guid>
    </item>`;
      })
      .join("")}
  </channel>
</rss>`;

  return rssFeed;
}

function escapeXml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
