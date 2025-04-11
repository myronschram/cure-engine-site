import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black/80 text-white py-8 px-4 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-sm text-white/60">
          © {new Date().getFullYear()} The Cure Engine. All rights reserved.
        </div>
        <div className="flex space-x-4 text-sm">
          <Link to="/" className="hover:text-cyan-400">Home</Link>
          <Link to="/hunter" className="hover:text-cyan-400">Hunter’s Story</Link>
          <Link to="/blog" className="hover:text-cyan-400">Blog</Link>
		  <Link to="/archive" className="hover:text-cyan-400">Archive</Link>

        </div>
      </div>
    </footer>
  );
}
