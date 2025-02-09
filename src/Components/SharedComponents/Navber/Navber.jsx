// src/Navbar.js
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#ecebea] p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center lg:justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="https://i.ibb.co/m54HGf61/Logo.jpg"
            alt="Logo"
            className="h-14 transition-transform duration-300 transform hover:scale-110"
          />
        </div>

        {/* Toggle Button for Mobile */}
        <button
          className="md:hidden flex flex-col justify-between w-5 h-6 mr-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block w-8 h-1 bg-gray-800 rounded transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          ></span>
          <span
            className={`block w-8 h-1 bg-gray-800 rounded transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-8 h-1 bg-gray-800 rounded transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          ></span>
        </button>

        {/* Navigation Links */}
        <div
          className={`md:flex lg:flex-grow lg:justify-end space-x-6 absolute md:static top-20 left-0 w-full bg-[#ecebea] md:bg-transparent p-4 md:p-0 transition-transform duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <a
            href="/"
            className="block md:inline text-gray-800 font-semibold hover:border-b-1 transition duration-500 px-3 py-2 rounded-md"
          >
            Home
          </a>
          <a
            href="/products"
            className="block md:inline text-gray-800 font-semibold hover:border-b-1 transition duration-500 px-3 py-2 rounded-md"
          >
            All Products
          </a>
          <a
            href="/contact"
            className="block md:inline text-gray-800 font-semibold hover:border-b-1 transition duration-500 px-3 py-2 rounded-md"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
