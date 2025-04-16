import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { loadPosts } from "../utils/loadPosts";  // ✅ Correct path to utility
import StaggeredGroup from "../StaggeredGroup";  // Optional styling

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchData() {
      console.log("🔄 Blog.jsx calling loadPosts()");
      const loadedPosts = await loadPosts();
      console.log("🧪 Blog.jsx received posts:", loadedPosts);
      setPosts(loadedPosts);
    }

    fetchData();
  }, []);

  const filtered = posts.filter((post) => {
    const term = search.toLowerCase();
    return (
      post.title.toLowerCase().includes(term) ||
      post.author.toLowerCase().includes(term) ||
      (post.tags || []).some((tag) => tag.toLowerCase().includes(term))
    );
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white font-sans px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-cyan-400 mb-6 text-center">Blog</h1>

        <div className="mb-10 text-center">
          <input
            type="text"
            placeholder="Search blog posts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 w-full md:w-2/3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring focus:ring-cyan-500 placeholder:text-white/50"
          />
        </div>

        {filtered.length === 0 ? (
          <p className="text-white/70 text-center">No posts match your search.</p>
        ) : (
          <StaggeredGroup>
            {filtered.map((post) => (
              <div key={post.slug} className="bg-white/5 p-6 rounded-xl shadow-lg hover:shadow-cyan-500/30 transition">
                <h2 className="text-2xl font-semibold text-cyan-300 mb-1">{post.title}</h2>
                <p className="text-sm text-white/60 mb-1">
                  {new Date(post.date).toLocaleDateString()} by {post.author}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-cyan-700/50 text-white px-2 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <p className="text-white/80 mb-3">{post.content.slice(0, 140)}...</p>
                <Link to={`/blog/${post.slug}`} className="text-cyan-400 hover:text-cyan-300 underline text-sm">
                  Read more →
                </Link>
              </div>
            ))}
          </StaggeredGroup>
        )}
      </div>
    </main>
  );
}
