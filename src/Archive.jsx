import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { loadPosts } from "./utils/loadPosts";

export default function Archive() {
  const [postsByYear, setPostsByYear] = useState({});

  useEffect(() => {
    async function fetchPosts() {
      const posts = await loadPosts();
      const grouped = posts.reduce((acc, post) => {
        const year = new Date(post.date).getFullYear();
        if (!acc[year]) acc[year] = [];
        acc[year].push(post);
        return acc;
      }, {});
      setPostsByYear(grouped);
    }
    fetchPosts();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white font-sans px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-cyan-400 mb-10 text-center">Blog Archive</h1>
        {Object.keys(postsByYear)
          .sort((a, b) => b - a)
          .map((year) => (
            <section key={year} className="mb-10">
              <h2 className="text-2xl font-bold text-cyan-300 mb-4">{year}</h2>
              <ul className="space-y-2">
                {postsByYear[year]
                  .sort((a, b) => new Date(b.date) - new Date(a.date))
                  .map((post) => (
                    <li key={post.slug}>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="text-cyan-400 hover:underline"
                      >
                        {post.title}
                      </Link>{" "}
                      <span className="text-white/50 text-sm">
                        ({new Date(post.date).toLocaleDateString()})
                      </span>
                    </li>
                  ))}
              </ul>
            </section>
          ))}
      </div>
    </main>
  );
}
