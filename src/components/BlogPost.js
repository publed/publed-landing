import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Helmet } from "react-helmet";

import { Buffer } from "buffer";
window.Buffer = Buffer;

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
        <img
          src={src}
          alt={alt}
          className="rounded-lg overflow-hidden my-12 w-full"
        />
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

  return (
    <div className="my-20 mx-auto flex flex-col items-center">
      <div className="max-w-screen-lg flex flex-col items-center px-4">
        <Helmet>
          <title>{post.title}</title>
          <meta property="og:title" content={post.title} />
          <meta property="og:image" content={post.coverImage} />
          <meta property="og:description" content={post.excerpt} />

          <meta name="twitter:title" content={post.title} />
          <meta name="twitter:image" content={post.coverImage} />
          <meta name="twitter:description" content={post.excerpt} />

          <meta name="description" content={post.excerpt} />

          <meta name="author" content={post.author.name} />
          <meta name="date" content={post.date} />

          <meta name="keywords" content={post.keywords} />
        </Helmet>

        <h1 className="font-semibold text-dark-blue-60 text-5xl text-center mb-2 mt-12 ">
          {post.title}
        </h1>
        <div className="w-full flex justify-between items-center mt-8 mb-5">
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
        <img
          className="rounded-lg overflow-hidden my-12 w-full h-1/2"
          alt={post.title}
          src={post.coverImage}
        />
        <div className="prose prose-invert md:prose-xl prose-code:break-words prose-pre:bg-gray-900 prose-pre:leading-relaxed md:prose-code:break-normal text-dark-blue-60 ">
          <ReactMarkdown components={MarkdownComponents}>
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
