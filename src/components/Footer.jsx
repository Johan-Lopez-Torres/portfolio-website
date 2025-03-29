import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 min-h-full text-white py-6 px-4 flex flex-col items-center justify-center">
      {/* Social Media Icons */}
      <div className="flex space-x-4 mb-4">
        <FaGithub className="text-2xl hover:text-teal-400" />
        <FaLinkedin
          className="text-2xl hover:text-teal
-400"
        />
      </div>

      {/* Footer Links */}
      <div className="flex space-x-4 mb-4 text-sm">
        <a href="/info" className="hover:underline">
          Info
        </a>
        <a href="/support" className="hover:underline">
          Support
        </a>
        <a href="/marketing" className="hover:underline">
          Marketing
        </a>
        <a href="/terms" className="hover:underline">
          Terms of Use
        </a>
        <a href="/privacy" className="hover:underline">
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
