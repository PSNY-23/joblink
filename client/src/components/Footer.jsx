import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FcBrokenLink } from "react-icons/fc";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-2 md:px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h2 className="text-xl font-bold flex gap-2 justify-center items-center"><FcBrokenLink/>JobLink</h2>
          </div>

          <div className="flex flex-col md:flex-row space-x-0 md:space-x-6 mb-4 md:mb-0">
            <a href="/" className="hover:text-gray-400 hover:underline">Home</a>
            <a href="/about" className="hover:text-gray-400 hover:underline">About Us</a>
            <a href="/contact" className="hover:text-gray-400 hover:underline">Contact</a>
            <a href="/privacy" className="hover:text-gray-400 hover:underline">Privacy Policy</a>
          </div>

          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="hover:text-gray-400" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-gray-400" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="hover:text-gray-400" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-gray-400" />
            </a>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-sm">&copy; {new Date().getFullYear()}
           JobLink. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
