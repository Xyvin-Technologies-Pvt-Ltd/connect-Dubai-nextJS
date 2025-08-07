"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white flex flex-col items-center">
      <header className="w-full max-w-screen-xl h-[75px] flex items-center justify-between px-4 md:px-6 text-black">
        {/* Logo / Left Side */}
        <div className="flex items-center h-full">
          <Image
            src="/images/Name → Logo Wrapper → Link - Brand Logo.png"
            width={50}
            height={50}
            alt="Logo"
            className="object-contain"
          />
        </div>

        {/* Desktop Center Nav */}
        <nav className="hidden md:flex gap-4 lg:gap-6 text-sm lg:text-base">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            About Us
          </a>
          <a href="#" className="hover:underline">
            Who can Join?
          </a>
          <a href="#" className="hover:underline">
            Why Join Now?
          </a>
          <a href="#" className="hover:underline">
            Upcoming Features
          </a>
        </nav>

        {/* Right Side (Join button + Mobile Menu Toggle) */}
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-3 border-[#002B21] border-2 text-[#002B21] bg-white px-6 py-2 rounded-full text-sm md:text-base">
            <span className="font-medium">Join Community</span>
            <span className="text-white bg-[#002B21] p-1.5 rounded-full">
              <ArrowRight size={16} />
            </span>
          </button>

          {/* Hamburger Icon */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <div className="w-full bg-white border-t border-gray-200 px-6 py-4 md:hidden text-center space-y-3 text-sm">
          <a href="#" className="block hover:underline">
            Home
          </a>
          <a href="#" className="block hover:underline">
            About Us
          </a>
          <a href="#" className="block hover:underline">
            Who can Join?
          </a>
          <a href="#" className="block hover:underline">
            Why Join Now?
          </a>
          <a href="#" className="block hover:underline">
            Upcoming Features
          </a>
          <button className="w-full mt-2 flex items-center justify-center gap-2 border-[#002B21] border-2 text-[#002B21] bg-white px-4 py-2 rounded-full">
            <span className="font-medium">Join Community</span>
            <span className="text-white bg-[#002B21] p-1.5 rounded-full">
              <ArrowRight size={16} />
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
