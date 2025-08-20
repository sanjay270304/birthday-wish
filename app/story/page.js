"use client";
import Typewriter from "typewriter-effect";

export default function Story() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-pink-50 text-center px-4 sm:px-6 lg:px-12 py-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-700 mb-6">💌 Our Story</h1>
      <div className="text-base sm:text-lg md:text-xl text-pink-900 max-w-sm sm:max-w-md md:max-w-2xl leading-relaxed">
        <Typewriter
          options={{
            strings: [
              "7 years back, two hearts met ❤",
              "Even distance couldn't keep them apart 🌍",
              "Today, I’m sending you all my love 🎂💖",
              'Every moment with you is a treasure 🥰',
              'You are my everything, NIDDUUU 💕',
            ],
            autoStart: true,
            loop: true,
            delay: 50
          }}
        />
      </div>
      <a href="/" className="mt-8 text-sm sm:text-base text-pink-600 hover:text-pink-800 underline transition">⬅ Back</a>
    </main>
  );
}