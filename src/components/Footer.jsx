import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 min-h-full text-white py-6 px-4 flex flex-col items-center justify-center">
      {/* Social Media Icons */}
      <div className="flex space-x-12 mb-4">
        <a
          href="https://github.com/Johan-Lopez-Torres"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-gray-400 hover:text-gray-300 text-6xl cursor-pointer  transition-colors duration-500 ease-in-out transform hover:scale-110" />
        </a>
        <a
          href="https://www.linkedin.com/in/johan-lopez-torres/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-gray-400 hover:text-gray-300 text-6xl cursor-pointer  transition-colors duration-500 ease-in-out transform hover:scale-110" />
        </a>
        <a
          href="mailto:tu-email@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGmail className="text-gray-400 hover:text-gray-300 text-6xl cursor-pointer  transition-colors duration-500 ease-in-out transform hover:scale-110" />
        </a>
        <a
          href="https://wa.me/51969418219"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="text-gray-400 hover:text-gray-300 text-6xl cursor-pointer mx-5 transition-colors duration-500 ease-in-out transform hover:scale-110" />
        </a>
      </div>

      {/* Footer Links */}
      <div className="flex space-x-4 mb-4 text-md ">
        <a href="/info" className="hover:underline hover:text-teal-400">
          Info
        </a>
        <a href="/support" className="hover:underline hover:text-teal-400">
          Support
        </a>
        <a href="/marketing" className="hover:underline hover:text-teal-400">
          Marketing
        </a>
        <a href="/terms" className="hover:underline hover:text-teal-400">
          Terms of Use
        </a>
        <a href="/privacy" className="hover:underline hover:text-teal-400">
          Privacy Policy
        </a>
      </div>

      {/* Copyright */}
      <div className="text-xs opacity-75">
        © {new Date().getFullYear()} Clarity Money
      </div>
    </footer>
  );
};

export default Footer;
