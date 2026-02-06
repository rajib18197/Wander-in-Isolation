import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import styles from "./BlogSlug.module.css";
import { BLOG_TITLE, SITE_URL } from "../../../constants";
import { loadBlogPost } from "../../../helpers/file-helpers";
import COMPONENT_MAP from "../../../helpers/mdx-components";
import BlogHero from "../../../components/BlogHero";
import ShareButtons from "../../../components/ShareButtons";

export async function generateMetadata({ params }) {
  const { blogId } = await params;

  const articlePath = path.join(process.cwd(), "./articles", `${blogId}.mdx`);
  const fileContents = fs.readFileSync(articlePath, "utf8");
  const { data } = matter(fileContents);

  const articleUrl = `${SITE_URL}/blogs/${blogId}`;

  return {
    title: `${data.title} — Wander in Isolation`,
    description: data.description || data.excerpt || "",
    authors: [{ name: "Rajib Das" }],

    openGraph: {
      title: `${data.title} — Wander in Isolation`,
      description: data.description || data.excerpt || "",
      url: articleUrl,
      siteName: BLOG_TITLE,
      locale: "en_US",
      type: "article",
      publishedTime: data.date,
      authors: ["Rajib Das"],
      images: [
        {
          url: data.coverImage || `${SITE_URL}/og-default.png`,
          width: 1200,
          height: 630,
          alt: `${data.title} — Wander in Isolation`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${data.title} — Wander in Isolation`,
      description: data.description || data.excerpt || "",
      creator: "@rajuzest",
      images: [data.coverImage || `${SITE_URL}/og-default.png`],
    },
  };
}

async function BlogPost({ params }) {
  const { blogId } = await params;
  const { frontmatter, content } = await loadBlogPost(blogId);

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />

      <div className={`${styles.page}`}>
        <MDXRemote source={content} components={COMPONENT_MAP} />
      </div>

      <ShareButtons
        title={frontmatter.title}
        url={`${SITE_URL}/blogs/${blogId}`}
      />
    </article>
  );
}

export default BlogPost;

// **The Central Question that drives my work is, "How Can I build better feature rich, dynamic and polished software applications that is useful + make people feel great to use?" To answer that question I like to read and write about foundational computer science subjects + software engineering principles, methods and tools.**
