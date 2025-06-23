import {
    ShoppingCart,
    UtensilsCrossed,
    Store,
    Globe,
    ArrowRight,
    Waves,
    Scale,
    Users,
    CheckCircle,
    Clock,
    Award,
    Shield,
    Truck,
    Fish,
    Heart
  } from "lucide-react";
  
  const AboutUs = () => {
    return (
      <div className="min-h-screen bg-white">
  
  
        <section className="relative py-24 bg-gradient-to-br from-slate-50 to-orange-50/50 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-[#F27C00]/10 to-[#7C1E12]/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-l from-blue-100/30 to-cyan-100/20 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              About <span className="bg-gradient-to-r from-[#F27C00] to-[#7C1E12] bg-clip-text text-transparent">EasyFish</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Fresh. Sustainable. Trusted. Discover the story behind Visakhapatnam's premier seafood brand.
            </p>
          </div>
        </section>
  
  
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-4">The Heart Behind EasyFish</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#F27C00] to-[#7C1E12] mx-auto rounded-full" />
            </div>
  
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative group">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Anil Kumar Karanam - Founder & CEO"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                  <div className="text-2xl font-bold text-[#7C1E12]">CEO</div>
                  <div className="text-sm text-gray-600">& Founder</div>
                </div>
              </div>
  
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Anil Kumar Karanam</h3>
                  <p className="text-[#F27C00] font-semibold text-lg">Founder & CEO</p>
                </div>
                <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                  <p>Born into a farming family, Anil's journey from rural roots to software engineering excellence shaped his understanding of both technology and traditional food systems.</p>
                  <p>His transition from the corporate world to entrepreneurship wasn't just a career change—it was a calling to bridge fresh, quality seafood with every household and business.</p>
                </div>
                <div className="relative p-8 bg-gradient-to-r from-[#F27C00]/5 to-[#7C1E12]/5 rounded-2xl border-l-4 border-[#F27C00]">
                  <blockquote className="text-2xl font-semibold text-gray-900 italic">"Our Fish takes a Bow to welcome you…"</blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
  

        <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Mission & Vision</h2>
              <p className="text-xl text-gray-600">Guided by purpose, driven by excellence</p>
            </div>
  
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              {[
                {
                  Icon: Waves,
                  title: "Our Mission",
                  desc: "To provide premium, sustainable seafood while supporting coastal communities and promoting responsible marine practices.",
                  color: "from-[#F27C00] to-[#7C1E12]"
                },
                {
                  Icon: Globe,
                  title: "Our Vision",
                  desc: "To be the most trusted seafood brand known for freshness, transparency, and environmental responsibility.",
                  color: "from-[#7C1E12] to-[#F27C00]"
                }
              ].map(({ Icon, title, desc, color }, i) => (
                <div key={i} className="p-10 bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-500">
                  <div className={`w-16 h-16 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
  
  
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  Icon: Waves,
                  title: "Sustainability",
                  desc: "Protecting marine ecosystems for future generations",
                  bg: "bg-blue-50",
                  hover: "group-hover:bg-blue-100",
                  iconClass: "text-blue-600"
                },
                {
                  Icon: Scale,
                  title: "Transparency",
                  desc: "Clear sourcing and quality standards you can trust",
                  bg: "bg-orange-50",
                  hover: "group-hover:bg-orange-100",
                  iconClass: "text-[#F27C00]"
                },
                {
                  Icon: Users,
                  title: "Community Support",
                  desc: "Empowering coastal communities and local fishermen",
                  bg: "bg-red-50",
                  hover: "group-hover:bg-red-100",
                  iconClass: "text-[#7C1E12]"
                }
              ].map(({ Icon, title, desc, bg, hover, iconClass }, i) => (
                <div key={i} className="text-center group cursor-pointer">
                  <div className={`w-20 h-20 ${bg} rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors ${hover}`}>
                    <Icon className={`w-10 h-10 ${iconClass}`} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{title}</h4>
                  <p className="text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
   
        <section className="py-24 bg-gradient-to-br from-gray-50 to-white text-center">
          <button className="bg-gradient-to-r from-[#F27C00] to-[#7C1E12] hover:from-[#E06D00] hover:to-[#A02515] text-white px-12 py-6 text-xl font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center group">
            Partner With Us Today
            <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
          </button>
        </section>
  
 
        <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold text-gray-900 mb-6">Serving Every Plate, Every Purpose</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">From home kitchens to export markets, we deliver excellence across all segments</p>
              </div>
  
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    Icon: ShoppingCart,
                    title: "Retail Consumers",
                    subtitle: "Local & Online",
                    desc: "Fresh seafood delivered to your doorstep with convenient online ordering.",
                    color: "#F27C00"
                  },
                  {
                    Icon: UtensilsCrossed,
                    title: "Restaurants",
                    subtitle: "& Catering",
                    desc: "Bulk supply with consistent quality and reliable delivery schedules.",
                    color: "#3B82F6"
                  },
                  {
                    Icon: Store, 
                    title: "Grocery Stores",
                    subtitle: "& Specialty Stores",
                    desc: "Wholesale partnerships with flexible inventory management.",
                    color: "#059669"
                  },
                  {
                    Icon: Globe,
                    title: "Export Partners",
                    subtitle: "International",
                    desc: "International quality standards with proper documentation.",
                    color: "#7C3AED"
                  }
                ].map(({ Icon, title, subtitle, desc, color }, i) => (
                  <div
                    key={i}
                    className="group p-6 text-center rounded-2xl bg-white shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
                  >
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: color }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                    <p className="text-sm font-semibold mb-3" style={{ color }}>
                      {subtitle}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed flex-grow">{desc}</p>
                    <div
                      className="flex items-center justify-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color }}
                    >
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
  
      </div>
    );
  };
  
  export default AboutUs;
  