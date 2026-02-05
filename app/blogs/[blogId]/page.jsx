import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";

import { BLOG_TITLE } from "../../../constants";
import { loadBlogPost } from "../../../helpers/file-helpers";
import COMPONENT_MAP from "../../../helpers/mdx-components";

import BlogHero from "../../../components/BlogHero";

import styles from "./BlogSlug.module.css";

export async function generateMetadata({ params }) {
  const { blogId } = await params;

  const { frontmatter } = await loadBlogPost(blogId);

  return {
    title: `${frontmatter.title} • ${BLOG_TITLE}`,
    description: frontmatter.abstract,
  };
}

async function BlogPost({ params }) {
  const { blogId } = await params;
  //   const { blogId } = postSlug;
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
    </article>
  );
}

export default BlogPost;

// **The Central Question that drives my work is, "How Can I build better feature rich, dynamic and polished software applications that is useful + make people feel great to use?" To answer that question I like to read and write about foundational computer science subjects + software engineering principles, methods and tools.**
