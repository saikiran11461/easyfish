"use client";

import React, { useEffect, useRef } from "react";

const FishFactsSection = () => {
  const scrollRef = useRef(null);

  const fishFacts = [
    {
      id: 1,
      title: "Wild seafood is a planet-friendly option",
      description: "Fishing has a lower environmental impact than land-based animal farming because it uses very little land or fresh water and doesn’t require feed or fertilisers..",
      icon: "🐟",
    },
    {
      id: 2,
      title: "Eating fish instead of meat can help to reduce carbon emissions",
      description: "Eating wild caught seafood results in less than one tenth the amount of carbon dioxide associated with red meat. It also has a lower carbon footprint than cheese or chicken.Certain seafoods, including small fish such as herring, mackerel and sprat have lower carbon emissions than rice and corn, while also being some of the most nutritious fish to eat.",
      icon: "🐙",
    },
    {
      id: 3,
      title: "People have been eating fish for nearly 2 million years",
      description: "The earliest definitive evidence of early humans eating aquatic animals dates back to 1.95 million years ago in Kenya. It was around this time that bigger-brained humans started to evolve.",
      icon: "🦐",
    },
    {
      id: 4,
      title: "Fish is the most globally traded food – more than sugar or coffee",
      description: "Seafood is the most highly traded commodity in the global food system, with trade doubling in both quantity and value between 1998 – 2018.The annual value of the international trade of seafood is USD$151 billion – worth more than five times the trade value of coffee and around US$30 billion more than sugar. This makes seafood essential to many national economies.",
      icon: "🐠",
    },
    {
      id: 5,
      title: " It’s not all about food",
      description: "millions of people depend on fishing as a way of life600 million people depend on seafood for employment. And it’s not just fishermen – more than half those working in the seafood sector are women. Fishing is also engrained in the culture of many coastal communities.",
      icon: "🦀",
    },
    {
      id: 6,
      title: "Globally people are eating more fish",
      description: "Global demand for seafood expected to double by 2050. To meet this increasing demand and feed a growing global population, governments must support and recognise fisheries that are managing the ocean sustainably. We’re also likely to be eating more farmed fish.",
      icon: "🌈",
    },
    {
      id: 7,
      title: " By choosing sustainable seafood, you’re helping make sure future generations enjoy fish too",
      description: "By buying seafood with the MSC blue label, or the green ASC label on farmed fish, you will be supporting responsible fishers helping to ensure an ocean full of life and delicious seafood for future generations to enjoy.",
      icon: "🌈",
    },
    {
      id: 8,
      title: " There are thousands of different types of seafood to try",
      description: "There are over 2,200 species of wild caught seafood and 600 farmed, yet most of us only regularly eat a small number of different fish. In America, the 10 most popular types of seafood account for 77% of all seafood consumption.",
      icon: "🌈",
    },
    {
      id: 9,
      title: "Super seafood’ is packed with nutrients",
      description: "Seafood is full of important nutrients, such as zinc, iron, vitamins A and B12 as well as omega-3 fatty acids all essential for human health.Oily fish such as salmon and herring contain pound for pound more essential nutrients than nuts, grains, meat, leafy veg or ",
      icon: "🌈",
    },
    {
      id: 10,
      title: "Mahi Mahi used to be called dolphinfish.",
      description: "They got this name not because they are related to dolphins, but because they have a tendency to swim alongside boats, the same way dolphins do. To avoid confusion, they are now more commonly known as Mahi Mahi, which is Hawaiian and literally translates to “strong-strong”.",
      icon: "🌈",
    },
    {
      id: 11,
      title: "Some schools contain millions of fish.",
      description: "Fish join schools to swim more efficiently, help protect themselves from predators, and improve foraging. They are able to stay in a large group by using a sensory structure called the lateral line, which picks up vibrations in the water. The next time a friend wonders how fish stay synchronized, you can share these seafood facts.",
      icon: "🌈",
    },
    {
      id: 12,
      title: "Fish don’t have vocal chords-but that doesn’t mean they’re silent.",
      description: "Fish communicate by making sounds using other body parts, such as sonic muscles near their swim bladders, tendons in the pectoral fins, and skeletal components, which can be rubbed together to make a sound known as stridulation.",
      icon: "🌈",
    },
    {
      id: 13,
      title: "Crab meat is high in vitamin B12.",
      description: "Here’s some seafood information that can improve your health. Vitamin B12 helps prevent anemia and keep our nerve and blood cells healthy. While some people take supplements to get enough of this vitamin, you can also eat crab: just 2-3 ounces of crab meat contains an adult’s daily B12 requirement.",
      icon: "🌈",
    },
    {
      id: 14,
      title: "Can pregnant women eat seafood? How about breastfeeding women?",
      description: "The answer is yes, and they are encouraged to eat fish and seafood as part of a healthy balanced diet!Studies have actually shown that children gain an average of 7.7 full IQ points when their moms ate seafood during pregnancy compared to moms that did not eat seafood.",
      icon: "🌈",
    },
    {
      id: 15,
      title: "Nutrients found in seafood",
      description: "such as Omega-3 fatty acids, protein, Vitamin B-12, Vitamin A, Vitamin D, Zinc, Iodine, Selenium and Iron - are vitally important during pregnancy and early childhood development.",
      icon: "🌈",
    },
    {
      id: 15,
      title: "Recommended to avoid the few fish that have comparatively higher levels in mercury:",
      description: "King Mackerel, Marlin, Shark, Swordfish and Bigeye Tuna (usually only found in sushi) Canned or pouch tuna such as Skipjack and Albacore, as well as Ahi and Yellowtail tuna are safe to consume while pregnant as long as they are cooked.",
      icon: "🌈",
    },

  ];
  const infiniteFacts = [...fishFacts, ...fishFacts]; // just double for mobile performance

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollSpeed = 0.3;
    let animationId;
    let isPaused = false;

    const animate = () => {
      if (!isPaused) {
        scrollContainer.scrollLeft += scrollSpeed;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
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
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-[#F27C00]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-br from-[#F27C00]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F27C00]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-2 sm:px-6 relative z-10">
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

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gray-800">Interesting</span>{" "}
            <span className="bg-gradient-to-r from-[#F27C00] to-[#7C1E12] bg-clip-text text-transparent">
              Facts...
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover fascinating secrets from the depths of our oceans
          </p>
        </div>

        {/* Scrollable Cards */}
        <div className="relative">
          {/* Side Shadows (hide on mobile) */}
          <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
          <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-hidden pb-4"
            style={{ scrollBehavior: "smooth" }}
          >
            {infiniteFacts.map((fact, index) => {
              const gradient = gradients[fact.id % gradients.length];
              return (
                <div
                  key={`${fact.id}-${index}`}
                  className="group flex-shrink-0 w-full sm:w-[400px] h-auto relative cursor-pointer"
                >
                  {/* Card background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-3xl 
                    sm:opacity-95 group-hover:opacity-100 transition-all duration-500 
                    sm:shadow-2xl sm:shadow-[#F27C00]/20 group-hover:shadow-[#F27C00]/30 
                    group-hover:scale-105`}
                  ></div>

                  {/* Glass effect (disabled on mobile) */}
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 sm:block hidden"></div>

                  {/* Content */}
                  <div className="relative p-6 sm:p-8 h-full flex flex-col justify-between text-white">
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-2xl sm:text-3xl transform group-hover:scale-110 transition-transform duration-400 drop-shadow-lg">
                        {fact.icon}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg sm:text-xl font-bold leading-tight drop-shadow-sm">
                        {fact.title}
                      </h3>
                      <p className="text-white/95 text-sm leading-relaxed drop-shadow-sm">
                        {fact.description}
                      </p>
                    </div>
                    <div className="flex justify-end mt-4">
                      <div className="w-12 h-1 bg-white/40 rounded-full group-hover:bg-white/60 transition-colors duration-300 hidden sm:block"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center items-center mt-10 space-x-4">
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
            Hover to pause • Scrolls automatically
          </span>
        </div>
      </div>
    </section>
  );
};

export default FishFactsSection;
