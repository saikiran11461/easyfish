'use client';

import React, { useEffect, useState } from 'react'
import { slides } from '@/utils/cursoleLinks';

const Header = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-4">
            <h1 className="text-4xl md:text-7xl font-bold">{slide.title}</h1>
            <h2 className="text-3xl md:text-5xl text-orange-400 font-semibold mt-2">{slide.subtitle}</h2>
            <p className="mt-4 text-lg md:text-xl">{slide.description}</p>
            <div className="mt-6 flex gap-4">
              <button className="bg-orange-500 px-6 py-3 rounded-3xl shadow hover:bg-orange-600">
                Explore Categories
              </button>
              <button className="bg-white text-black px-6 py-3 rounded-3xl shadow hover:bg-gray-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Arrow navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-20"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-20"
      >
        ❯
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === i ? "bg-orange-500" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Floating down arrow to scroll to next section */}
      <a
  href="#next-section"
  className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20"
>
  <div className="animate-bounce bg-gradient-to-r from-[#F27C00] to-[#7C1E12] hover:from-[#E06D00] hover:to-[#A02515] text-white rounded-full p-3 m-6 shadow-lg hover:scale-105 transition-transform duration-300">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-white font-bold"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </div>
</a>


    </div>
  );
};

export default Header;
