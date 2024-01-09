import { useEffect, useState } from "react";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import matter from "gray-matter";
import postList from "../posts/postList";

interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  coverImage: string;
  date: string;
  author: {
    name: string;
    photo: string;
  };
  fileName: string;
}

const Blog = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    Promise.all(postList.map(fetchPostDetails))
      .then(setPosts)
      .catch(console.error);
  }, []);

  return (
    <section className="bg-white h-screen flex justify-center items-center px-16 my-2">
      <div className="max-w-screen-xl m-auto w-full py-4 px-4 lg:py-8 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-dark-blue-60 ">
            Our Blog
          </h2>
          <p className="font-light text-default-60 sm:text-xl dark:text-gray-400">
            Find out more about Publed and stay tuned for all the announcements
            and information from our experts in the space.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {posts.map((post, index) => (
            <Link to={`/blog/${post.fileName}`} key={index}>
              <Card
                key={index}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                category={post.category}
                author={post.author.name}
                authorImage={post.author.photo}
                onReadMore={() => navigate(`/blog/${post.fileName}`)}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

function fetchPostDetails(fileName: string): Promise<BlogPost> {
  return import(`../posts/${fileName}.md`)
    .then((res) => fetch(res.default))
    .then((res) => res.text())
    .then((text) => {
      const { data } = matter(text);
      return {
        title: data.title,
        excerpt: data.excerpt,
        category: data.category,
        coverImage: data.coverImage,
        date: data.date,
        author: {
          name: data.author.name,
          photo: data.author.photo,
        },
        fileName,
      };
    });
}
