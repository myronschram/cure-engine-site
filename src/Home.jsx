import React from "react";
import { Link } from "react-router-dom";
import EmailSignup from "./EmailSignup";
import { motion } from "framer-motion";
import AnimatedHeader from "./AnimatedHeader";


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white font-sans">
      <header className="flex flex-col items-center justify-center py-16 text-center px-4">
        <img
          src="/logo.png"
          alt="The Cure Engine logo"
          className="h-32 sm:h-40 w-auto drop-shadow-2xl mb-6"
        />
        <AnimatedHeader>
         <h1 className="text-5xl font-extrabold text-cyan-400 mb-4">
            The Cure Engine
          </h1>
        </AnimatedHeader>
        <p className="text-xl sm:text-2xl max-w-xl text-white/80">
          Fueling the fight against childhood brain cancer
        </p>
        <div className="flex gap-4 mt-6">
          <Link
            to="/hunter"
            className="px-6 py-3 bg-cyan-500 text-white font-medium rounded-lg hover:bg-cyan-600 transition drop-shadow-md"
          >
            Read Hunter’s Story
          </Link>
		  <Link
            to="/blog"
            className="px-6 py-3 bg-cyan-700 text-white font-medium rounded-lg hover:bg-cyan-800 transition drop-shadow-md"
          >
            Visit the Blog
          </Link>

          <button
            disabled
            className="px-6 py-3 bg-gray-600 text-white font-medium rounded-lg opacity-50 cursor-not-allowed drop-shadow-md"
          >
            Donate
          </button>
        </div>
      </header>

      <section className="text-center py-20 px-6">
        <h2 className="text-3xl text-cyan-400 font-semibold mb-4">Our Mission</h2>
        <p className="max-w-3xl mx-auto text-white/80 text-lg leading-relaxed">
          We are a nonprofit on a mission to eradicate pediatric brain cancer.
          Using a protocol driven by cutting-edge CAR T-cell therapy targeting IL13Rα2,
          we believe every child deserves a chance at life.
        </p>
      </section>

      <section className="text-center py-16 px-6 bg-black/10 backdrop-blur">
        <h2 className="text-3xl text-cyan-400 font-semibold mb-4">The Science</h2>
        <p className="max-w-3xl mx-auto text-white/80 text-lg leading-relaxed mb-6">
          In partnership with leading pediatric oncologists and CAR T-cell experts,
          we’re advancing a novel therapy for treating deadly brain tumors like
          diffuse midline gliomas. Our protocol builds on recent breakthroughs,
          guided by AI, clinical collaboration, and patient-centered ethics.
        </p>
        <ul className="max-w-md mx-auto text-white/70 text-left space-y-2 list-disc list-inside">
          <li>Targeting IL13Rα2 receptors</li>
          <li>Adaptive CAR T-cell protocols</li>
          <li>AI-driven treatment simulations</li>
          <li>Partnerships with top research institutions</li>
        </ul>
      </section>

      
	  <EmailSignup />
    </main>
  );
}
