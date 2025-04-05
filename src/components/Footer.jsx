import React from "react";
import SocialIcons from "./SocialIcons";

const Footer = () => {

  const socialLinks = [
    { platform: "github", url: "https://github.com/Johan-Lopez-Torres" },
    {
      platform: "linkedin",
      url: "https://www.linkedin.com/in/johan-lopez-torres/",
    },
    { platform: "gmail", url: "mailto:johanlopezsre@gmail.com" },
    { platform: "whatsapp", url: "https://wa.me/51969418219" },
  ];

  const links = [
    { href: "/info", label: "Info" },
    { href: "/support", label: "Support" },
    { href: "/marketing", label: "Marketing" },
    { href: "/terms", label: "Terms of Use" },
    { href: "/privacy", label: "Privacy Policy" },
  ];

  return (
    <footer className="bg-zinc-900 min-h-full text-white py-6 px-4 flex flex-col items-center justify-center">
      {/* Social Media Icons */}
      <div className="flex space-x-12 mb-4">
        <SocialIcons socials={socialLinks} />
      </div>

      {/* Footer Links */}
      <div className="flex space-x-4 mb-4 text-md ">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="hover:underline hover:text-teal-400"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <div className="text-xs opacity-75">
        © {new Date().getFullYear()} Clarity Money
      </div>
    </footer>
  );
};

export default Footer;
