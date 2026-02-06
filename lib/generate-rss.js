import { SITE_URL } from "../constants";

export function generateRssFeed(articles) {
  const siteUrl = SITE_URL;
  const author = "Rajib Das";

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${author}'s Blog</title>
    <link>${siteUrl}</link>
    <description>Hey there, Welcome! I'm glad you're here. My name is Rajib Das and I'm a Software Engineer. I've been sharing educational lessons on various software engineering concepts and tools as I learn them. I'm absolutely positive you'll love the way I articulate them and find them useful.</description>
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
