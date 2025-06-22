"use client"
import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, Users, TrendingUp } from "lucide-react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      rating: 5,
      text: "The fish quality is exceptional! Always fresh and perfectly cleaned. EasyFish has become our go-to for seafood.",
      location: "Mumbai",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      role: "Food Enthusiast"
    },
    {
      name: "Rajesh Kumar",
      rating: 5,
      text: "Quick delivery and excellent packaging. The vacuum-sealed fish stays fresh for days. Outstanding quality!",
      location: "Kolkata",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      role: "Chef"
    },
    {
      name: "Anita Patel",
      rating: 5,
      text: "Finally found a reliable source for fresh fish online. The dry fish selection is amazing too!",
      location: "Chennai",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      role: "Home Cook"
    },
    {
      name: "Amit Singh",
      rating: 5,
      text: "Outstanding service! The freshness of the seafood is unmatched. Highly recommended for seafood lovers.",
      location: "Bangalore",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      role: "Customer"
    },
    {
      name: "Meera Das",
      rating: 5,
      text: "Best fish delivery service! Fresh catch delivered right to my doorstep. Customer service is excellent.",
      location: "Hyderabad",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      role: "Regular Customer"
    },
    {
      name: "Vikram Reddy",
      rating: 5,
      text: "Impressed with the variety and quality. The app is user-friendly and delivery is always on time.",
      location: "Pune",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      role: "Tech Professional"
    }
  ];

  const itemsPerView = 3;
  const maxIndex = testimonials.length - itemsPerView;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  const next = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
  
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-[#F27C00]/10 to-[#7C1E12]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-l from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full border border-gray-200/50 mb-6">
            <Users className="w-4 h-4 text-[#F27C00]" />
            <span className="text-sm font-medium text-gray-700">TESTIMONIALS</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-[#F27C00] bg-clip-text text-transparent">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from satisfied customers who trust us for their seafood needs
          </p>
        </div>


        <div className="relative max-w-7xl mx-auto">
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg border border-gray-200 text-gray-600 hover:bg-[#F27C00] hover:text-white transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg border border-gray-200 text-gray-600 hover:bg-[#F27C00] hover:text-white transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-5 h-5" />
          </button>


          <div className="px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleTestimonials.map((testimonial, index) => (
                <div
                  key={`${currentIndex}-${index}`}
                  className="group relative bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl rounded-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 p-6"
                >
                  <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40">
                    <Quote className="w-8 h-8 text-[#F27C00]" />
                  </div>

         
                  <div className="flex space-x-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

       
                  <p className="text-gray-700 text-sm leading-relaxed mb-6 line-clamp-4">
                    "{testimonial.text}"
                  </p>

     
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#F27C00]/20">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-[#F27C00] text-xs font-medium">{testimonial.role}</p>
                      <p className="text-gray-500 text-xs">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

     
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-8 h-2 bg-gradient-to-r from-[#F27C00] to-[#7C1E12]"
                    : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

  
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { label: "Happy Customers", value: "1000+" },
            { label: "Average Rating", value: <span className="flex items-center gap-1">4.9<Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /></span> },
            { label: "Orders Delivered", value: "5000+" },
            { label: "Satisfaction Rate", value: <span className="flex items-center gap-1">99%<TrendingUp className="w-5 h-5 text-green-500" /></span> }
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl font-bold text-[#7C1E12] mb-2">{stat.value}</div>
              <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
