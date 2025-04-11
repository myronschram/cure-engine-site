import React, { useState } from "react";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); // "success", "error", or null

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    try {
      const res = await fetch("https://formspree.io/f/mwplaaed", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        throw new Error("Form error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section className="bg-black/50 p-8 rounded-xl max-w-xl mx-auto text-white mt-20 text-center shadow-lg">
      <h2 className="text-2xl font-semibold text-cyan-400 mb-2">Stay Updated</h2>
      <p className="text-white/70 mb-4">Sign up to receive updates about our mission and progress.</p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center gap-4">
        <input
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-2 rounded-md text-black w-full sm:w-auto"
        />
        <button
          type="submit"
          className="bg-cyan-600 hover:bg-cyan-500 text-white px-5 py-2 rounded-md transition disabled:opacity-50"
        >
          Sign Up
        </button>
      </form>

      {status === "success" && (
        <p className="mt-4 text-green-400">Thanks! You’re signed up.</p>
      )}
      {status === "error" && (
        <p className="mt-4 text-red-400">Oops! Something went wrong. Please try again.</p>
      )}
    </section>
  );
}
