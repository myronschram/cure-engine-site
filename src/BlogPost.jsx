import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadPosts } from "./utils/loadPosts";
import ReactMarkdown from "react-markdown";

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      const posts = await loadPosts();
      const found = posts.find((p) => p.slug === slug);
      setPost(found);
    }
    fetchPost();
  }, [slug]);

  if (!post) return <p className="text-white text-center mt-20">Loading post...</p>;

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white font-sans px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-cyan-400 mb-4">{post.title}</h1>
        <p className="text-sm text-white/60 mb-3">
          {new Date(post.date).toLocaleDateString()} — {post.author}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags?.map((tag) => (
            <span key={tag} className="text-xs bg-cyan-700/50 text-white px-2 py-1 rounded-full">
              #{tag}
            </span>
          ))}
        </div>
        <div className="prose prose-invert prose-lg max-w-none text-white/90">
          <ReactMarkdown
            components={{
              img: ({ node, ...props }) => (
                <img
                  {...props}
                  className="rounded-lg my-4 w-full max-w-full mx-auto shadow-lg"
                  alt={props.alt || ""}
                />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </main>
  );
}
