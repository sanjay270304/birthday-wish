"use client";
import { useState } from "react";

export default function LettersPage() {
  const messages = [
    "You are in my heart ❤️",
    "You shall be in there forever 💖",
    "My greatest wish is that you are happy when you think of me",
    "You are the reason my heart smiles every day 😊❤️",
    "No matter where life takes us, you’ll always be my forever 🌹",
    "You’re my today, my tomorrow, and all of my forever 💍❤️"
  ];

  const [opened, setOpened] = useState(Array(messages.length).fill(false));

  const openLetter = (index) => {
    const newOpened = [...opened];
    newOpened[index] = true;
    setOpened(newOpened);
  };

  return (
    <main className="min-h-screen bg-pink-50 flex flex-col items-center px-4 sm:px-6 lg:px-12 py-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-700 mb-6 text-center">💌 Open Your Letters</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {messages.map((msg, i) => (
          <div
            key={i}
            className="w-40 sm:w-44 md:w-52 h-28 sm:h-32 md:h-36 bg-white rounded-lg shadow-lg flex items-center justify-center cursor-pointer relative transition-transform hover:scale-105"
            onClick={() => openLetter(i)}
          >
            {!opened[i] ? (
              <span className="text-pink-500 text-2xl sm:text-3xl">✉</span>
            ) : (
              <p className="text-pink-900 text-xs sm:text-sm md:text-base text-center p-2">{msg}</p>
            )}
          </div>
        ))}
      </div>
      <a href="/" className="mt-8 text-sm sm:text-base text-pink-600 hover:text-pink-800 underline transition">⬅ Back</a>
    </main>
  );
}