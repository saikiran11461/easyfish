"use client";
import React, { useEffect, useRef } from "react";

const FishFactsSection = () => {
  const scrollRef = useRef(null);

  const fishFacts = [
    { id: 1, title: "Salmon Remember Their Birthplace", description: "Salmon return using smell and magnetic fields.", icon: "🐟" },
    { id: 2, title: "Octopus Have Three Hearts", description: "One heart stops beating while swimming.", icon: "🐙" },
    { id: 3, title: "Shrimp's Heart is in Their Head", description: "Vital organs are in the head.", icon: "🦐" },
    { id: 4, title: "Tuna Can Warm Their Blood", description: "Allows them to swim in any water.", icon: "🐠" },
    { id: 5, title: "Crabs Walk Sideways", description: "Sideways walk gives them speed.", icon: "🦀" },
    { id: 6, title: "Fish Communicate Through Colors", description: "They change color to signal and blend in.", icon: "🌈" },
  ];

  const infiniteFacts = [...fishFacts, ...fishFacts];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollSpeed = 0.7;
    let animationId;

    const animate = () => {
      container.scrollLeft += scrollSpeed;
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
      animationId = requestAnimationFrame(animate);
    };

    const pause = () => (scrollSpeed = 0);
    const resume = () => (scrollSpeed = 0.7);

    container.addEventListener("mouseenter", pause);
    container.addEventListener("mouseleave", resume);
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener("mouseenter", pause);
      container.removeEventListener("mouseleave", resume);
    };
  }, []);

  return (
    <section className="bg-white py-20 px-4">
      <div className="text-center mb-12">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#F27C00] to-[#7C1E12] text-white flex items-center justify-center text-2xl shadow-lg">
          🌊
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          Fascinating Ocean{" "}
          <span className="bg-gradient-to-r from-[#F27C00] to-[#7C1E12] bg-clip-text text-transparent">
            Facts
          </span>
        </h2>
        <p className="text-gray-600 mt-3 text-lg max-w-xl mx-auto">
          Discover surprising facts from the deep sea 
        </p>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden px-2"
      >
        {infiniteFacts.map((fact, index) => (
          <div
            key={`${fact.id}-${index}`}
            className="min-w-[280px] bg-[linear-gradient(to_right,rgba(242,124,0,0.15),rgba(124,30,18,0.15))] text-gray-800 rounded-2xl p-6 shadow transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex-shrink-0"
          >
            <div className="text-3xl mb-4">{fact.icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-[#7C1E12]">{fact.title}</h3>
            <p className="text-sm text-gray-700">{fact.description}</p>
          </div>
        ))}
      </div>

      
    </section>
  );
};

export default FishFactsSection;
