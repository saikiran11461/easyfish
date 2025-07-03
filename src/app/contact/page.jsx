"use client";

import axios from "axios";

import { useState } from "react";
import Footer from "@/components/Footer";
import WhatsAppFloatingIcon from "@/components/WatsAppFloatIcon";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const googleFormURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSdytQZ9n6lUDa2eY0kykcuFOzHtu_8UJ7az5ApHZORTLvYzAQ/formResponse";
  
    const formDataMap = new URLSearchParams({
      "entry.65210250": formData.name,
      "entry.962400039": formData.email,
      "entry.781651916": formData.phone,
      "entry.2129824985": formData.message,
    });
  
    await fetch(googleFormURL, {
      method: "POST",
      mode: "no-cors", // ✅ absolutely required
      body: formDataMap.toString(), // ✅ correct body format
    });
  
    // Google will not return a visible success response.
    // You must check Google Form manually for the submission
    alert("Message submitted! Check your Google Form responses tab.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };
  
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#7C1E12] via-[#8B2635] to-[#7C1E12] text-white py-20 mt-22">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get in Touch with <span className="text-[#F27C00]">EasyFish</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            We're here to answer questions, take your orders, and support your
            seafood journey.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Send Us a Message
            </h2>
            <p className="text-gray-600 text-lg">
              Fill out the form below and we'll get back to you as soon as
              possible
            </p>
          </div>

          <div className="rounded-xl border bg-white/70 backdrop-blur-sm text-card-foreground shadow-2xl">
            <div className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full h-12 px-4 border-2 border-gray-200 focus:border-[#F27C00] rounded-xl transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email"
                      className="w-full h-12 px-4 border-2 border-gray-200 focus:border-[#F27C00] rounded-xl transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    className="w-full h-12 px-4 border-2 border-gray-200 focus:border-[#F27C00] rounded-xl transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Type your message here..."
                    className="w-full min-h-[120px] px-4 py-3 border-2 border-gray-200 focus:border-[#F27C00] rounded-xl resize-none transition-all duration-300"
                  />
                </div>

                <div className="text-center pt-4">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#F27C00] to-[#FF8A33] hover:from-[#E66B00] hover:to-[#F27C00] text-white px-12 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <hr className="my-12 border-t border-gray-300" />

    <WhatsAppFloatingIcon/>
    
    </div>
  );
};

export default ContactUs;
