import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navItem = (path, label) => (
    <Link
      to={path}
      className={`px-4 py-2 rounded-md transition font-medium ${
        location.pathname === path
          ? "bg-cyan-600 text-white"
          : "text-cyan-300 hover:bg-cyan-800 hover:text-white"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <nav className="bg-black/80 backdrop-blur sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl text-cyan-400 font-extrabold tracking-wide">
          The Cure Engine
        </Link>
        <div className="space-x-2">
          {navItem("/", "Home")}
          {navItem("/hunter", "Hunter's Story")}
          {navItem("/blog", "Blog")}
		  {navItem("/archive", "Archive")}

        </div>
      </div>
    </nav>
  );
}
