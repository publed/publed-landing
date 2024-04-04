import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Helmet } from "react-helmet";
import { Buffer } from "buffer";

window.Buffer = Buffer;
const publedLink = "https://www.publed.io";

const BlogPost = ({ fileName }) => {
  const [post, setPost] = useState({
    title: "",
    coverImage: "",
    content: "",
    date: "",
    author: {},
  });

  const MarkdownComponents = {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold my-4 ">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold mt-10 mb-4 ">{children}</h2>
    ),
    h3: ({ children }) => (
      <h2 className="text-xl font-semibold mt-10 mb-4 ">{children}</h2>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside ">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside pl-6">{children}</ol>
    ),
    li: ({ children }) => <li className="mb-2 ml-4">{children}</li>,

    strong: ({ children }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 my-4">
        {children}
      </blockquote>
    ),
    img: ({ src, alt }) => {
      console.log("Rendering image with src:", src); // Debug: Log the image source
      return (
        <>
          {" "}
          <img
            src={src}
            alt={alt}
            className="rounded-lg overflow-hidden w-full mt-8"
          />
          <figcaption className="mb-8 text-light-blue-80">{alt}</figcaption>
        </>
      );
    },
    p: ({ children }) => {
      return <p className="mb-4">{children}</p>;
    },
  };

  useEffect(() => {
    import(`../posts/${fileName}.md`)
      .then((res) => fetch(res.default))
      .then((res) => res.text())
      .then((text) => {
        const { data, content } = matter(text);
        console.log(content); // Debug: Log the content
        setPost({ ...data, content });
      })
      .catch((err) => {
        console.error("Error fetching markdown:", err);
      });
  }, [fileName]);

  console.log(post.title);
  console.log(post.excerpt);

  return (
    <div className="my-20 mx-auto flex flex-col items-center">
      <div className="max-w-screen-md flex flex-col items-center px-3">
        <SEO title={post.title} description={post.excerpt} />
        <h1 className="font-semibold text-dark-blue-60 text-5xl text-center mb-5 mt-12 ">
          {post.title}
        </h1>

        <div className="w-full flex justify-between items-center mt-4 mb-4">
          <div className="flex items-center">
            <img
              src={post.author.photo}
              alt={post.author.name}
              className="rounded-full w-12 h-12"
            />
            <span className="ml-4 text-dark-blue-60">{post.author.name}</span>
          </div>
          <div className="flex items-center text-dark-blue-60">
            <span className="font-bold">Published on:&nbsp;</span>
            {post.date}
          </div>
        </div>
        <div className="flex flex-row gap-1 mb-4 justify-start w-full">
          {post?.category?.split(",").map((category, index) => (
            <span
              key={index}
              className="bg-gray-100 text-typo-white text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-500 dark:text-typo-white"
            >
              {category.trim()}{" "}
            </span>
          ))}
        </div>
        <img
          className="rounded-lg overflow-hidden mb-8 w-full"
          alt={post.title}
          src={post.coverImage}
        />
        <div className="prose prose-invert md:prose-xl prose-code:break-words prose-pre:bg-gray-900 prose-pre:leading-relaxed md:prose-code:break-normal text-dark-blue-60">
          <ReactMarkdown components={MarkdownComponents}>
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
