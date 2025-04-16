import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadPosts } from "../utils/loadPosts";
import { marked } from "marked";

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      const allPosts = await loadPosts();
      const match = allPosts.find((p) => p.slug === slug);
      setPost(match);
    }
    fetchPost();
  }, [slug]);

  useEffect(() => {
    const scriptId = "commentbox-script";
    if (!document.getElementById(scriptId)) {
      const s = document.createElement("script");
      s.id = scriptId;
      s.src = "https://unpkg.com/commentbox.io/dist/commentBox.min.js";
      s.async = true;
      document.body.appendChild(s);
    }

    const timer = setTimeout(() => {
      if (window.commentBox) {
        window.commentBox("5741254205767680-proj", {
          className: "commentbox",
          textColor: "#22d3ee",       // Bright cyan like "St. Jude"
          subtextColor: "#9ca3af",    // Tailwind gray-400
          backgroundColor: "transparent"
        });
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [slug]);

  if (!post) return <p className="text-white p-10">Loading post...</p>;

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white font-sans px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-cyan-300 mb-2">{post.title}</h1>
        <p className="text-sm text-white/70 mb-4">
          {new Date(post.date).toLocaleDateString()} by {post.author}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags?.map((tag) => (
            <span key={tag} className="text-xs bg-cyan-800 text-white px-2 py-1 rounded-full">
              #{tag}
            </span>
          ))}
        </div>
        <article
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: marked(post.content) }}
        />
        <div className="commentbox mt-10" />
      </div>
    </main>
  );
}
