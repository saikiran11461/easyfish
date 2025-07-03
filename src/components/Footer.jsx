"use client";
import React from "react";
import {
  Fish,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import Image from "next/image";
import Icon from "../assets/logo.png";
const Footer = () => {
  const navLinks = [
    { id: "/", name: "Home" },
    { id: "products", name: "Products" },
    { id: "about", name: "About Us" },
    { id: "contact", name: "Contact" },
  ];
  return (
    <footer className="bg-gradient-to-br from-[#7C1E12] to-[#7C1E12]/90 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#F27C00] to-[#F27C00]/80 rounded-xl flex items-center justify-center shadow-lg shadow-[#F27C00]/25">
                {/* <Fish className="w-7 h-7 text-white" /> */}
                <Image alt="icon" src={Icon} />
              </div>
              <div className="flex flex-col">
                {/* <span className="text-2xl font-bold text-white leading-tight">
                  EasyFish
                </span>
                <span className="text-sm text-[#F27C00] font-medium -mt-1">
                  Premium Seafood
                </span> */}
              </div>
            </div>
            <p className="text-gray-200 mb-6 leading-relaxed max-w-md">
              Premium seafood sourced directly from Visakhapatnam's pristine
              waters. We're committed to sustainability, freshness, and
              supporting coastal communities.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white/10 hover:bg-[#F27C00] rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-white/10 hover:bg-[#F27C00] rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer">
                <Twitter className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-white/10 hover:bg-[#F27C00] rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#F27C00]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`${link.id}`}
                    className="text-gray-200 hover:text-[#F27C00] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#F27C00]">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#F27C00] flex-shrink-0" />
                <span className="text-gray-200 text-sm">
                  Visakhapatnam, Andhra Pradesh
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#F27C00] flex-shrink-0" />
                <span className="text-gray-200 text-sm">+91 9848547675</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#F27C00] flex-shrink-0" />
                <span className="text-gray-200 text-sm">info@easyfish.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            © 2024 EasyFish. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a
              href="#"
              className="text-gray-300 hover:text-[#F27C00] transition-colors duration-300"
            >
              Privacy Policy EasyFish
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-[#F27C00] transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
