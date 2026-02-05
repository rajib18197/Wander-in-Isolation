import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const blogsDirectory = path.join(process.cwd(), "articles");

export function getBlogsData() {
  const fileNames = fs.readdirSync(blogsDirectory);

  const allBlogsData = fileNames.map((file) => {
    const id = file.replace(/\.mdx$/, "");

    const fullPath = path.join(blogsDirectory, file);
    const fileContent = fs.readFileSync(fullPath, "utf8");

    const matterResults = matter(fileContent);

    const blog = {
      id,
      title: matterResults.data.title,
      abstract: matterResults.data.abstract,
      publishedOn: matterResults.data.publishedOn,
    };

    console.log(blog);

    return blog;
  });

  return allBlogsData;
}

export async function getBlogData(id) {
  console.log(id);
  const fullPath = path.join(blogsDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResults = matter(fileContents);
  console.log(matterResults);

  return {
    data: matterResults.data,
    content: matterResults.content,
  };

  // const processedContent = await remark()
  //   .use(html)
  //   .process(matterResults.content);

  // const contentHTML = processedContent.toString();

  // const blogPostWithHTML = {
  //   id,
  //   title: matterResults.data.title,
  //   date: matterResults.data.date,
  //   contentHTML,
  // };

  // console.log(blogPostWithHTML);

  // return blogPostWithHTML;
}
