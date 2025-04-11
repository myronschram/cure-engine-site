import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center text-white bg-black px-6 text-center">
      <div>
        <h1 className="text-6xl font-bold text-cyan-500 mb-4">404</h1>
        <p className="text-lg text-white/70 mb-6">Oops! That page doesn’t exist.</p>
        <Link to="/" className="text-cyan-400 underline hover:text-cyan-300">
          Back to home
        </Link>
      </div>
    </main>
  );
}
