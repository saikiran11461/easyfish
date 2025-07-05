"use client"

import React, { useEffect, useRef } from "react";

const FishFactsSection = () => {
  const scrollRef = useRef(null);

  const fishFacts = [
    {
      id: 1,
      title: "Salmon's Incredible Journey",
      description: "Atlantic salmon can navigate thousands of miles back to their exact birthplace using magnetic field detection and an amazing sense of smell.",
      icon: "🐟",
    },
    {
      id: 2,
      title: "Octopus Triple Hearts",
      description: "These intelligent sea creatures have three hearts working together - two for gills, one for the body. The main heart stops when swimming!",
      icon: "🐙",
    },
    {
      id: 3,
      title: "Shrimp's Head Heart",
      description: "Unlike humans, shrimp keep their heart in their head alongside their brain, perfectly adapted for underwater pressure survival.",
      icon: "🦐",
    },
    {
      id: 4,
      title: "Tuna's Warm Blood",
      description: "Bluefin tuna are remarkable warm-blooded fish that regulate body temperature, thriving in both tropical and arctic waters.",
      icon: "🐠",
    },
    {
      id: 5,
      title: "Crab's Sideways Sprint",
      description: "Crabs walk sideways because of their unique leg placement, making them surprisingly fast and agile both underwater and on land.",
      icon: "🦀",
    },
    {
      id: 6,
      title: "Fish Color Communication",
      description: "Many fish species change colors instantly to express emotions, show dominance, or blend with surroundings in milliseconds.",
      icon: "🌈",
    },
  ];

  const infiniteFacts = [...fishFacts, ...fishFacts, ...fishFacts];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollSpeed = 1;
    let animationId;
    let isPaused = false;

    const animate = () => {
      if (!isPaused) {
        scrollContainer.scrollLeft += scrollSpeed;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 3) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener("mouseenter", () => (isPaused = true));
    scrollContainer.addEventListener("mouseleave", () => (isPaused = false));

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("mouseenter", () => {});
      scrollContainer.removeEventListener("mouseleave", () => {});
    };
  }, []);

  const gradients = [
    "from-[#F27C00] to-[#FF8A33]",
    "from-[#7C1E12] to-[#F27C00]",
    "from-[#F27C00] to-[#D86B00]",
    "from-[#FF8A33] to-[#7C1E12]",
    "from-[#D86B00] to-[#F27C00]",
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-98 h-96 bg-gradient-to-br from-[#F27C00]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-9 h-96 bg-gradient-to-br from-[#F27C00]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F27C00]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-2 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-[#F27C00] to-[#7C1E12] rounded-2xl flex items-center justify-center shadow-2xl shadow-[#F27C00]/25">
                <span className="text-3xl">🌊</span>
              </div>
              <div className="absolute -inset-2 bg-gradient-to-br from-[#F27C00]/20 to-[#7C1E12]/20 rounded-2xl blur-xl"></div>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gray-800">Ocean</span>
            <span className="bg-gradient-to-r from-[#F27C00] to-[#7C1E12] bg-clip-text text-transparent ml-4">
              Mysteries
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover fascinating secrets from the depths of our oceans
          </p>
        </div>

        {/* Horizontal Scroll Area */}
        <div className="relative">
          {/* Side Shadows */}
          <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden pb-4"
            style={{ scrollBehavior: "smooth" }}
          >
            {infiniteFacts.map((fact, index) => {
              const gradient = gradients[fact.id % gradients.length];
              return (
                <div
                  key={`${fact.id}-${index}`}
                  className="group flex-shrink-0 w-[400px] h-73 relative cursor-pointer"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-3xl opacity-95 group-hover:opacity-100 transition-all duration-500 shadow-2xl shadow-[#F27C00]/20 group-hover:shadow-[#F27C00]/30 group-hover:scale-105`}
                  ></div>
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20"></div>

                  <div className="relative p-8 h-full flex flex-col justify-between text-white">
                    <div className="flex justify-between items-start mb-6">
                      <div className="text-5xl transform group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                        {fact.icon}
                      </div>
                      <div className="w-2 h-2 bg-white/40 rounded-full group-hover:bg-white/60 transition-colors duration-300"></div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold leading-tight drop-shadow-sm">
                        {fact.title}
                      </h3>
                      <p className="text-white/95 text-sm leading-relaxed drop-shadow-sm">
                        {fact.description}
                      </p>
                    </div>
                    <div className="flex justify-end mt-4">
                      <div className="w-12 h-1 bg-white/40 rounded-full group-hover:bg-white/60 transition-colors duration-300"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Indicator */}
        <div className="flex justify-center items-center mt-12 space-x-6">
          <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 bg-gradient-to-r from-[#F27C00] to-[#7C1E12] rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.3}s` }}
              ></div>
            ))}
          </div>
          <span className="text-gray-500 text-sm font-medium">
            Hover to pause • Auto-scrolling ocean facts
          </span>
        </div>
      </div>
    </section>
  );
};

export default FishFactsSection;
