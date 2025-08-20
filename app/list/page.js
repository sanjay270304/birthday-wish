export default function LoveList() {
  const items = [
    "Teri beautiful hasiii(Smile) 😊",
    "Tera care mere liye 🥰",
    "Tera support in every situation 💪",
    "Teri Voice 🎶",
    "Tera Pyaar mere liye💖",
    "Tere saath bitaye hue pal (Long Nights)🕰️",
    "Tere saath ki choti choti baatein 🗨️",
    "Tere saath ki hasi mazak 😂",
    "OFC mku choose kri soo decision 🥳",
    "Buss... Tuu babyyyyy ❤"
  ];

  return (
    <main className="min-h-screen bg-pink-100 flex flex-col items-center px-4 sm:px-6 lg:px-12 py-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-700 mb-6 text-center">10 Things I Love About You</h1>
      <ul className="text-sm sm:text-base md:text-lg text-pink-900 space-y-2 list-decimal max-w-sm sm:max-w-md md:max-w-2xl leading-relaxed">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <a href="/" className="mt-8 text-sm sm:text-base text-pink-600 hover:text-pink-800 underline transition">⬅ Back</a>
    </main>
  );
}