// app/rss.xml/route.js
import { generateRssFeed } from "../../lib/generate-rss";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const hasNotIncluded = ["React-limitations.mdx"];

export async function GET() {
  const articlesDirectory = path.join(process.cwd(), "/articles");
  const filenames = fs.readdirSync(articlesDirectory);

  const articles = filenames
    .filter((filename) => filename.endsWith(".mdx"))
    .filter((file) => !hasNotIncluded.includes(file))
    .map((filename) => {
      const filePath = path.join(articlesDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug: filename.replace(".mdx", ""),
        title: data.title,
        date: data.date,
        description: data.description,
        excerpt: data.excerpt,
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const rssFeed = generateRssFeed(articles);

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600", // Cache for 1 hour
    },
  });
}
