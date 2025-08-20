"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import confetti from "canvas-confetti";

export default function Home() {
  const [opened, setOpened] = useState(false);

  const startFireworks = () => {
    const duration = 5 * 1000; // 5 seconds of fireworks
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 10,
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        origin: {
          x: Math.random(),
          y: Math.random() - 0.2
        },
        colors: ["#ff0a54", "#ff477e", "#ff85a1", "#fbb1bd", "#f9bec7"]
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  const handleOpenGift = () => {
    setOpened(true);
    startFireworks();
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-pink-200 to-pink-400 text-center p-4">
      {!opened ? (
        <>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-900">Happy Birthday NIDDUUU ❤️💕</h1>
          <div className="p-3 m-3 max-w-xl sm:max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-pink-950 bg-white/40 rounded-xl shadow-md">
            Happy Birthday to the one who means the
            world to me.
            I don't think I'll ever have
            the right words to fully express how much you mean to me-but I'1l try anyway.
            <br />Thank you..,<br />
            Thank
            you for showing up in my life and
            staying. For the love, the late-night talks, the
            silent understanding, and even the difficult conversations. Thank
            you for being real with me, for seeing
            me when I felt low, and for reminding
            me that I matter.
            You've been my calm in the chaos, my
            steady when everything else feels shaky. You've taught
            me that love doesn't always come with fireworks-it
            can also be quiet, patient, and steady. And that's exactly what you've been for me.
            You're not
            just someone I care about-you're the person who
            changed the way I see the world, and
            myself.
            So today, I hope you feel just a
            fraction of the love you've given me. You
            deserve that and so much more. I hope
            this year brings you peace, joy, and everything
            you've quietly wished for when no one was
            listening.
            Happy Birthday Darling. I'm so lucky I get to
            say I know you. And even luckier that
            I get to love you..
          </div>
          <button
            className="mt-4 text-base sm:text-lg text-pink-900 cursor-pointer bg-pink-300 rounded-2xl px-4 sm:px-6 py-2 sm:py-3 hover:bg-pink-400 transition-colors"
            onClick={handleOpenGift}
          >
            Tap here
          </button>
        </>
      ) : (
        <>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-700"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            Happy Birthday My Love 🎂
          </motion.h1>
          
          <p className="mt-4 text-pink-900 text-sm sm:text-base md:text-lg">Choose where to go next:</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 w-full sm:w-auto justify-center">
            <a href="/candle" className="bg-pink-500 px-4 py-2 rounded-full text-white text-sm sm:text-base hover:bg-pink-600 transition">Blow the candle</a>
            <a href="/story" className="bg-pink-500 px-4 py-2 rounded-full text-white text-sm sm:text-base hover:bg-pink-600 transition">Our Story</a>
            <a href="/list" className="bg-pink-500 px-4 py-2 rounded-full text-white text-sm sm:text-base hover:bg-pink-600 transition">10 Things I Love</a>
            <a href="/letters" className="bg-pink-500 px-4 py-2 rounded-full text-white text-sm sm:text-base hover:bg-pink-600 transition">Open letters</a>
          </div>
        </>
      )}
    </main>
  );
}
