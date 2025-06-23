"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleInputChange = () => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
 
      <section className="relative overflow-hidden bg-gradient-to-r from-[#7C1E12] via-[#8B2635] to-[#7C1E12] text-white py-20">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch with <span className="text-[#F27C00]">EasyFish</span></h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            We're here to answer questions, take your orders, and support your seafood journey.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Send Us a Message</h2>
            <p className="text-gray-600 text-lg">Fill out the form below and we'll get back to you as soon as possible</p>
          </div>

          <div className="rounded-xl border bg-white/70 backdrop-blur-sm text-card-foreground shadow-2xl">
            <div className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Full Name <span className="text-red-500">*</span></label>
                    <Input name="name" value={formData.name} onChange={handleInputChange} required placeholder="Enter your full name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Email Address <span className="text-red-500">*</span></label>
                    <Input name="email" type="email" value={formData.email} onChange={handleInputChange} required placeholder="Enter your email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Phone Number (Optional)</label>
                  <Input name="phone" type="tel" value={formData.phone} onChange={handleInputChange} placeholder="Enter your phone number" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Message <span className="text-red-500">*</span></label>
                  <Textarea name="message" value={formData.message} onChange={handleInputChange} required placeholder="Type your message here..." />
                </div>
                <div className="text-center pt-4">
                  <Button type="submit">Send Message</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 px-6 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Information</h2>
            <p className="text-gray-600 text-lg">Reach out to us through any of these channels</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Phone",
                content: ["9052-752-119", "9848-54-76-75"],
                iconColor: "from-[#F27C00] to-[#FF8A33]",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                )
              },
              {
                title: "Email",
                content: ["support@easyfish.in"],
                iconColor: "from-[#7C1E12] to-[#8B2635]",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                )
              },
              {
                title: "Location",
                content: ["Visakhapatnam", "Andhra Pradesh, India"],
                iconColor: "from-blue-500 to-blue-600",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                )
              }
            ].map(({ title, content, iconColor, icon }, i) => (
              <div key={i} className="rounded-xl bg-white p-8 text-center shadow hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-r ${iconColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  {icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
                {content.map((line, idx) => (
                  <p key={idx} className="text-gray-600">{line}</p>
                ))}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://wa.me/919052752119"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transition-all"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c...z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Separator className="my-0" />


      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Visit or Locate Us</h2>
            <p className="text-gray-600 text-lg">Find us in the beautiful coastal city of Visakhapatnam</p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-2xl">
            <div className="w-full h-96 bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12..."
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default ContactUs;
