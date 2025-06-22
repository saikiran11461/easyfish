'use client';

import Button from "@/Custom/Button";
import React, { useState } from "react";
import logo from "../assets/logo.png";
import Image from "next/image";
import { IoIosMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active);
  };

  return (
    <>
      {/* Top Nav */}
      <div className="box-border px-[20px] lg:px-[100px] py-[10px] bg-amber-60 relative z-50">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <Image src={logo} alt="logo" width={70} />
          </div>

          {/* Desktop Links */}
          <ul className="hidden lg:flex gap-9 ">
            <li>
              <a href="#" className="hover:text-amber-600 transition-colors cursor-pointer">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-600 transition-colors cursor-pointer">Products</a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-600 transition-colors cursor-pointer">About us</a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-600 transition-colors cursor-pointer">Orders</a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-600 transition-colors cursor-pointer">Contact</a>
            </li>
          </ul>

          {/* Desktop Button + Mobile Menu Icon */}
          <div className="flex items-center gap-3">
            <Button
              className="bg-[var(--background)] text-white px-[20px] py-[9px] rounded-xl text-[18px] hidden lg:block"
              text="Oder now"
            />
            <IoIosMenu size={25} className="lg:hidden cursor-pointer" onClick={handleActive} />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transition-transform duration-300 ${active ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <span className="font-semibold text-lg">Menu</span>
          <IoMdClose size={24} className="cursor-pointer" onClick={handleActive} />
        </div>

        <ul className="flex flex-col gap-6 px-6 py-6 font-medium text-gray-800">
          <li><a href="#" onClick={handleActive}>Home</a></li>
          <li><a href="#" onClick={handleActive}>Products</a></li>
          <li><a href="#" onClick={handleActive}>About us</a></li>
          <li><a href="#" onClick={handleActive}>Orders</a></li>
          <li><a href="#" onClick={handleActive}>Contact</a></li>
        </ul>

        <div className="px-6 mt-4">
          <Button
            className="bg-[var(--background)] text-white w-full py-[10px] rounded-xl"
            text="Oder now"
          />
        </div>
      </div>

      {/* Overlay */}
      {active && (
        <div className="fixed inset-0 bg-black opacity-30 z-40" onClick={handleActive} />
      )}
    </>
  );
};

export default Navbar;
