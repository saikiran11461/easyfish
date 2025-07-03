"use client"
import React, { useState } from "react";
import  Button  from "../../Custom/Button";
import WhatsAppFloatingIcon from "@/components/WatsAppFloatIcon";
import {freshProducts} from "../../utils/freshProducts"
import Image from 'next/image';

const Products = () => {
    const [activeFilter, setActiveFilter] = useState("all");

    const productCategories = [
      { id: "all", name: "All Fresh" },
      { id: "finfish-premium", name: "FinFish - Premium" },
      { id: "finfish-regular", name: "FinFish - Regular" },
      { id: "shellfish-premium", name: "ShellFish - Premium" },
      { id: "shellfish-regular", name: "ShellFish - Regular" },
      { id: "dry-fish", name: "Dry Fish" }
    ];
    
      



const filteredProducts = activeFilter === "all"
  ? freshProducts
  : freshProducts.filter(product => product.category === activeFilter);


  
  return (
    <div>
      

      <section className="relative py-24 bg-gradient-to-br from-slate-50 to-orange-50/50 overflow-hidden mt-20">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-[#F27C00]/10 to-[#7C1E12]/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-l from-blue-100/30 to-cyan-100/20 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Premium <span className="text-[#F27C00]">Seafood</span> Products
          </h1>
          <p className="text-xl md:text-2xl text-black/90 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            From ocean to your table - Experience the freshest catch with EasyFish
          </p>
          </div>
        </section>


<section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-cyan-50 ">
  <div className="container mx-auto max-w-7xl">
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Explore Our Fresh Catches</h2>
      <p className="text-gray-600 text-lg mb-8">Premium seafood sourced directly from Visakhapatnam’s pristine waters</p>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {productCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveFilter(category.id)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
              activeFilter === category.id
                ? "bg-gradient-to-r from-[#F27C00] to-[#FF8A33] text-white shadow-md"
                : "bg-white text-gray-700 border-gray-300 hover:border-[#F27C00] hover:text-[#F27C00]"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>

    {/* Product Cards */}
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-xl shadow hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
        >
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-3 left-3">
              <span className="bg-[#F27C00] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                {product.freshness}
              </span>
            </div>
          </div>
          <div className="p-4 space-y-1">
            <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.description}</p>
            <p className="text-sm text-gray-500">{product.cut} • {product.packaging}</p>
            {/* <p className="text-base font-semibold text-[#F27C00] mt-1">{product.price}</p> */}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


     

      

      
      {/* EasyFish Advantage */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">The EasyFish Advantage</h2>
            <p className="text-gray-600 text-lg">What makes our seafood exceptional</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🌊", title: "Wild-Caught Freshness", desc: "Directly sourced from natural waters" },
              { icon: "🧼", title: "Hygienically Cleaned", desc: "Processed in certified facilities" },
              { icon: "📦", title: "Vacuum Packaging", desc: "Preserves freshness and flavor" },
              { icon: "🕐", title: "1-Hour Delivery", desc: "Lightning fast delivery in Vizag" },
              { icon: "❄️", title: "Non-Frozen", desc: "Always fresh, never frozen" },
              { icon: "📋", title: "10+ Cut Types", desc: "Customized cuts for every recipe" },
            ].map((item, index) => (
              <div key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white text-center p-8 rounded-xl">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* Seafood Collage Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-cyan-50">
  <div className="container mx-auto max-w-7xl">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Fresh Collection</h2>
      <p className="text-gray-600 text-lg">A glimpse of our premium seafood varieties</p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="space-y-4">
        <img
          src="https://images.pexels.com/photos/61153/fish-fischer-ocean-market-61153.jpeg"
          alt="Fresh Fish"
          className="w-full h-48 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        />
        <img
          src="https://images.pexels.com/photos/96379/pexels-photo-96379.jpeg"
          alt="Shellfish"
          className="w-full h-32 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        />
      </div>

      <div className="space-y-4 pt-8">
        <img
          src="https://images.pexels.com/photos/229789/pexels-photo-229789.jpeg"
          alt="Premium Tuna"
          className="w-full h-32 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        />
        <img
          src="https://images.pexels.com/photos/2042564/pexels-photo-2042564.jpeg"
          alt="Ocean Fresh"
          className="w-full h-48 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        />
      </div>

      <div className="space-y-4">
        <img
          src="https://images.pexels.com/photos/3680164/pexels-photo-3680164.jpeg"
          alt="Crab"
          className="w-full h-40 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        />
        <img
          src="https://images.pexels.com/photos/3650159/pexels-photo-3650159.jpeg"
          alt="Sea Delicacies"
          className="w-full h-40 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        />
      </div>

      <div className="space-y-4 pt-12">
        <img
          src="https://images.pexels.com/photos/30649002/pexels-photo-30649002.jpeg"
          alt="Exotic Fish"
          className="w-full h-36 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        />
        <img
          src="https://images.pexels.com/photos/30910212/pexels-photo-30910212.jpeg"
          alt="Premium Catch"
          className="w-full h-44 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        />
      </div>
      
    </div>


    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
      <div className="space-y-4">
        <img
          src="https://images.pexels.com/photos/8352398/pexels-photo-8352398.jpeg"
          alt="Fresh Fish"
          className="w-full h-48 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        />
        <img
          src="https://images.pexels.com/photos/8351887/pexels-photo-8351887.jpeg"
          alt="Shellfish"
          className="w-full h-32 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        />
      </div>

      <div className="space-y-4 pt-8">
        <img
          src="https://images.pexels.com/photos/8352010/pexels-photo-8352010.jpeg"
          alt="Premium Tuna"
          className="w-full h-32 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        />
        <img
          src="https://images.pexels.com/photos/8352396/pexels-photo-8352396.jpeg"
          alt="Ocean Fresh"
          className="w-full h-48 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        />
      </div>

      <div className="space-y-4">
        <img
          src="https://images.pexels.com/photos/8351890/pexels-photo-8351890.jpeg"
          alt="Crab"
          className="w-full h-40 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        />
        <img
          src="https://images.pexels.com/photos/12273122/pexels-photo-12273122.jpeg"
          alt="Sea Delicacies"
          className="w-full h-40 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        />
      </div>

      <div className="space-y-4 pt-12">
        <img
          src="https://images.pexels.com/photos/96379/pexels-photo-96379.jpeg"
          alt="Exotic Fish"
          className="w-full h-36 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        />
        <img
          src="https://images.pexels.com/photos/246120/pexels-photo-246120.jpeg"
          alt="Premium Catch"
          className="w-full h-44 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        />
      </div>
      
    </div>
  </div>
</section>




      {/* Custom Orders Section */}

      <section className="py-20 px-6">
  <div className="container mx-auto max-w-7xl">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Tailored Orders for Your Business
      </h2>
      <p className="text-gray-600 text-lg">
        Professional seafood solutions for every industry
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          iconBg: "from-[#F27C00] to-[#FF8A33]",
          icon: (
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
          ),
          title: "🧑‍🍳 Restaurants & Catering",
          description: "Custom daily seafood boxes tailored for restaurants, hotels, and catering services with consistent quality and delivery.",
          points: ["Daily fresh supply", "Custom portioning", "Flexible delivery schedules"],
          buttonText: "Get Quote",
          buttonColor: "from-[#F27C00] to-[#FF8A33]",
          buttonHover: "hover:from-[#E66B00] hover:to-[#F27C00]"
        },
        {
          iconBg: "from-[#7C1E12] to-[#8B2635]",
          icon: (
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
          ),
          title: "🧺 Grocery & Specialty Stores",
          description: "Bulk packaging solutions with competitive pricing for grocery chains and specialty seafood retailers.",
          points: ["Wholesale pricing", "Brand packaging options", "Volume discounts"],
          buttonText: "Partner With Us",
          buttonColor: "from-[#7C1E12] to-[#8B2635]",
          buttonHover: "hover:from-[#6B1A10] hover:to-[#7C1E12]"
        },
        {
          iconBg: "from-blue-500 to-blue-600",
          icon: (
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd" />
            </svg>
          ),
          title: "🌐 Export Partners",
          description: "Premium quality seafood with traceable sourcing for international markets and export requirements.",
          points: ["Export quality standards", "Full traceability", "International certifications"],
          buttonText: "Export Inquiry",
          buttonColor: "from-blue-500 to-blue-600",
          buttonHover: "hover:from-blue-600 hover:to-blue-700"
        }
      ].map((item, idx) => (
        <div key={idx} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 rounded-xl p-8 text-center">
          <div className={`w-20 h-20 bg-gradient-to-r ${item.iconBg} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
            {item.icon}
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
          <p className="text-gray-600 mb-6">{item.description}</p>
          <ul className="text-sm text-gray-500 space-y-2 mb-6">
            {item.points.map((point, i) => (
              <li key={i}>• {point}</li>
            ))}
          </ul>
          <button className={`w-full px-6 py-3 bg-gradient-to-r ${item.buttonColor} ${item.buttonHover} text-white font-semibold rounded-xl transition-all duration-300`}>
            {item.buttonText}
          </button>
        </div>
      ))}
    </div>
  </div>
</section>


   {/* Sustainability Section */}
 <section className="py-20 px-6 bg-gradient-to-r from-green-50 to-blue-50">
  <div className="container mx-auto max-w-7xl">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Responsibly Sourced, Naturally Fresh
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          At EasyFish, we're committed to sustainable fishing practices that protect our oceans while delivering the freshest seafood to your table.
        </p>

        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Partnering with CMFRI & CIFT</h3>
              <p className="text-gray-600">Collaborating with India's premier marine research institutes for sustainable practices.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Responsible Fishermen Network</h3>
              <p className="text-gray-600">Working directly with local fishermen and cage culture farmers for ethical sourcing.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-[#F27C00] rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Natural Processing</h3>
              <p className="text-gray-600">Sun-dried fish with no salt or sand, maintaining natural flavors and nutrition.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-8">
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">Eco-Friendly</span>
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">Traceable</span>
          <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-semibold">Marine Expert Guided</span>
        </div>
      </div>

      <div className="relative">
        <img 
          src="https://images.pexels.com/photos/28559524/pexels-photo-28559524.jpeg" 
          alt="Sustainable Fishing" 
          className="w-full h-96 object-cover rounded-3xl shadow-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
      </div>
    </div>
  </div>
</section>


      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-50 to-yellow-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Why Choose EasyFish?</h2>
            <p className="text-gray-600 text-lg">Your trusted seafood partner for quality, hygiene, and reliability</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "✅", title: "Sustainable Sourcing", desc: "Eco-friendly practices with certified partners" },
              { icon: "🚚", title: "Fast Delivery", desc: "1-hour doorstep delivery in select areas" },
              { icon: "💧", title: "Clean & Hygienic", desc: "Processed in modern hygienic units" },
              { icon: "🎣", title: "Expert-Curated", desc: "Products selected by marine specialists" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl text-center shadow-md hover:shadow-lg transition duration-300">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppFloatingIcon/>
    </div>
  );
};

export default Products;