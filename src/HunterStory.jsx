import React from "react";

export default function HunterStory() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white font-sans px-4 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <img
          src="/hunter.jpg"
          alt="Hunter Drake Schram"
          className="mx-auto mb-8 rounded-xl shadow-lg w-full max-w-md grayscale transition duration-1000 ease-in-out"
        />
        <h1 className="text-4xl font-extrabold text-cyan-400 mb-4">Hunter’s Story</h1>
        <p className="text-lg text-white/80 leading-relaxed mb-6">
          Hunter Drake Schram was just five years old when he was diagnosed with a massive
          (4–5 cm) infiltrating astrocytoma tumor in his brainstem. His diagnosis came
          in November 2003, and within four months — to the day — he passed away on
          March 25, 2004.
        </p>
        <p className="text-lg text-white/70 leading-relaxed mb-4">
          Hunter loved books, puzzles, dinosaurs, and being with his family. His bravery,
          his spark, and his smile inspired everyone around him. Though his life was short,
          his impact was immeasurable. He brought people together, created a movement,
          and became the reason behind this mission.
        </p>
        <p className="text-lg text-white/70 leading-relaxed">
          This site — and everything it stands for — is built in Hunter’s memory, so
          other children like him will have a chance at life.
        </p>
      </div>
    </main>
  );
}
