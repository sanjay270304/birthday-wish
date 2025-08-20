"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function BirthdayPage() {
  const [blown, setBlown] = useState(false);

  useEffect(() => {
    const handleBlow = (stream) => {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const source = audioContext.createMediaStreamSource(stream);
      const analyser = audioContext.createAnalyser();
      source.connect(analyser);

      const dataArray = new Uint8Array(analyser.fftSize);
      const detectBlow = () => {
        analyser.getByteTimeDomainData(dataArray);
        let sum = 0;
        for (let i = 0; i < dataArray.length; i++) {
          sum += Math.abs(dataArray[i] - 128);
        }
        const volume = sum / dataArray.length;

        if (volume > 20) {
          setBlown(true); // Blow detected 🎉
        }
        requestAnimationFrame(detectBlow);
      };
      detectBlow();
    };

    navigator.mediaDevices.getUserMedia({ audio: true }).then(handleBlow);
  }, []);

  return (
    <main className="min-h-screen bg-pink-50 flex flex-col">
      {/* Navigation Bar */}
      <nav className="w-full bg-pink-200 shadow-md p-4 flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-xl font-bold text-pink-800 mb-2 sm:mb-0">
          🎂 Birthday Special
        </h1>
        <div className="space-x-6">
          <Link href="/" className="text-pink-700 hover:underline">
            Home
          </Link>
          <a href="#candles" className="text-pink-700 hover:underline">
            Blow the Candles
          </a>
        </div>
      </nav>

      {/* Hero / Welcome */}
      <section className="flex-1 flex flex-col items-center justify-center text-center p-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-pink-700 mb-6">
          Welcome to the Birthday Celebration 🎉
        </h2>
        <p className="text-base sm:text-lg text-pink-600">
          "Blow the Candles" to begin!
        </p>
      </section>

      {/* Cake + Candles Section */}
<h2 className="text-xl sm:text-2xl font-bold text-pink-700 mb-8 text-center">
  Blow the Candles 🎂
</h2>
<section
  id="candles"
  className="flex flex-col items-center justify-center py-16 sm:py-20 bg-pink-100"
>
  {/* Cake container */}
  <div className="relative flex flex-col items-center">
    {/* Candles */}
    <div className="absolute -top-8 sm:-top-10 flex space-x-3 sm:space-x-5">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex flex-col items-center">
          {/* Flame */}
          <div
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-yellow-300 shadow-md ${
              blown ? "opacity-0 scale-0" : "opacity-100 scale-100"
            } transition-all duration-700`}
          ></div>

          {/* Candle body */}
          <div className="w-2 sm:w-3 h-8 sm:h-10 bg-white rounded-sm border border-pink-200"></div>
        </div>
      ))}
    </div>

    {/* Cake Base */}
    <div className="w-44 sm:w-64 h-28 sm:h-40 bg-pink-300 rounded-t-2xl shadow-lg relative overflow-hidden">
      {/* Top cream layer */}
      <div className="absolute top-0 left-0 w-full h-6 sm:h-8 bg-pink-200 rounded-t-2xl"></div>

      {/* Middle cream waves */}
      <div className="absolute bottom-8 sm:bottom-10 left-0 w-full flex space-x-2 sm:space-x-3 justify-center">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="w-4 h-4 sm:w-5 sm:h-5 bg-pink-100 rounded-full"
          ></div>
        ))}
      </div>

      {/* Bottom cake layer */}
      <div className="absolute bottom-0 w-full h-10 sm:h-12 bg-pink-400 rounded-b-2xl"></div>
    </div>
  </div>

  {blown && (
    <p className="mt-6 text-base sm:text-lg text-pink-700 text-center">
      🎉 Happy Birthday to the most beautiful girl in the whole world 😘😘 <br /> May all your wishes come true🤞. <br /> May this year be filled with endless love,laughter and moments that make your heart race-just like you make mine.🎉
    </p>
  )}
</section>

    </main>
  );
}
