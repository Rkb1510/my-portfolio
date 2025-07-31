//components/Drawings.jsx

import React from "react";

function Drawings() {
  const drawings = [
    {
      title: "Panda",
      imageUrl: "/drawings/panda.PNG",
    },
    {
      title: "Shiv",
      imageUrl: "/drawings/shiv.PNG",
    },
    {
      title: "Tweety",
      imageUrl: "/drawings/tweety.PNG",
    },
    {
      title: "Ice-Cream Cone",
      imageUrl: "/drawings/cone.PNG",
    },
    {
      title: "Kitty",
      imageUrl: "/drawings/kitty.PNG",
    },
    {
      title: "Tulip Flower",
      imageUrl: "/drawings/tulip.PNG",
    },
    {
      title: "Baby Yoda",
      imageUrl: "/drawings/yoda.PNG",
    },
  ];

  return (
    <section
      id="drawings"
      className="pt-12 pb-20 px-6 flex-col items-center text-center
                bg-gradient-to-b from-black via-gray-800 to-black text-gray-100"
    >
        <h1 className="text-4xl font-extrabold mb-10 pb-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent
                    drop-shadow-[0_0_8px_rgba(56,178,172,.35)]"
        >
            My Artwork
        </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {drawings.map((drawing, index) => (
          <div
            key={index}
            className="bg-gray-800 border border-purple-400/10 rounded-lg overflow-hidden shadow-md hover:shadow-purple-500/30 transition"
          >
            <img
              src={drawing.imageUrl}
              alt={drawing.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-white font-medium">{drawing.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Drawings;
