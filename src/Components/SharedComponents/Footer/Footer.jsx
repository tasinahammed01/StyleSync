// src/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold">&copy; {new Date().getFullYear()} Style Sync. All Rights Reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="/privacy" className="hover:text-gray-400 transition duration-300">Privacy Policy</a>
          <a href="/terms" className="hover:text-gray-400 transition duration-300">Terms of Service</a>
          <a href="/contact" className="hover:text-gray-400 transition duration-300">Contact Us</a>
        </div>
        <div className="flex justify-center space-x-7 mt-4">
          <a href="#" className="hover:text-gray-400 transition duration-300">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-gray-400 transition duration-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-gray-400 transition duration-300">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-gray-400 transition duration-300">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;