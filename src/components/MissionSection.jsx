
import React from 'react';

const MissionSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-[#7C1E12]/5 to-[#F27C00]/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-[#7C1E12] mb-8">
                Our Commitment to Excellence
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-[#F27C00] pl-6">
                  <h3 className="text-2xl font-semibold text-[#7C1E12] mb-3">Mission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To provide premium, sustainable seafood while supporting coastal communities and promoting responsible marine practices.
                  </p>
                </div>
                
                <div className="border-l-4 border-[#F27C00] pl-6">
                  <h3 className="text-2xl font-semibold text-[#7C1E12] mb-3">Vision</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To be the most trusted seafood brand known for freshness, transparency, and environmental responsibility.
                  </p>
                </div>
                
                <div className="border-l-4 border-[#F27C00] pl-6">
                  <h3 className="text-2xl font-semibold text-[#7C1E12] mb-3">Sustainability</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We partner with CMFRI and CIFT, practicing eco-friendly cage farming, non-frozen packaging, and fully traceable sourcing to protect our oceans for future generations.
                  </p>
                </div>
              </div>
            </div>
            
        
            <div className="flex flex-wrap gap-4 pt-6">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                <div className="w-3 h-3 bg-[#F27C00] rounded-full"></div>
                <span className="text-sm font-medium text-[#7C1E12]">CMFRI Certified</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                <div className="w-3 h-3 bg-[#F27C00] rounded-full"></div>
                <span className="text-sm font-medium text-[#7C1E12]">CIFT Partner</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                <div className="w-3 h-3 bg-[#F27C00] rounded-full"></div>
                <span className="text-sm font-medium text-[#7C1E12]">Eco-Friendly</span>
              </div>
            </div>
          </div>
          
 
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=800&q=80"
                alt="Sustainable fishing practices"
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#7C1E12]/20 to-transparent"></div>
            </div>
            
   
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border-t-4 border-[#F27C00]">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#7C1E12]">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-xl border-t-4 border-[#F27C00]">
              <div className="text-center">

Sai Kiran, [6/22/2025 9:05 AM]
<div className="text-3xl font-bold text-[#7C1E12]">500+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;