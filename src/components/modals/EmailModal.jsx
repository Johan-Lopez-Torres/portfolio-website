import React, { useState, useRef, useEffect } from "react";

const DialogDemo = ({ isOpen, closeDialog }) => {
  const [email, setEmail] = useState("johanlopezsre@gmail.com");
  const [copied, setCopied] = useState(false);
  const modalRef = useRef(null); // Ref for modal container

  const copyEmail = () => {
    navigator.clipboard.writeText(email); // Copy email to clipboard
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeDialog();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeDialog]);

  if (!isOpen) return null; // Prevent rendering dialog when closed

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        backdropFilter: "blur(3px)", // Apply blur to the background
        backgroundColor: "rgba(0, 0, 0, 0.3)", // Dark overlay with opacity
      }}
    >
      <div
        ref={modalRef}
        className="bg-zinc-800 text-white rounded-lg w-full max-w-md p-6 relative shadow-lg"
      >
        {/* Botón de cerrar */}
        <button
          onClick={closeDialog}
          className="absolute right-4 top-4 text-gray-400 hover:text-white text-xl font-bold"
        >
          ×
        </button>

        {/* Título */}
        <h2 className="text-xl font-bold mb-4">Contact Me</h2>

        {/* Texto descriptivo */}
        <p className="text-sm mb-6 font-medium  text-gray-300 leading-relaxed">
          If you are an employer, recruiter, or interested in discussing
          potential job opportunities, I would love to hear from you. I am
          open to exciting roles in companies or startups where I can
          contribute and grow.
        </p>

        {/* Campo de email */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2 text-gray-300">
            Email Address:
          </label>
          <div className="flex">
            <input
              type="email"
              value={email}
              readOnly
              className="flex-grow font-medium bg-[#FDE045] text-black py-2 px-3 rounded-l-md"
            />
            <button
              onClick={copyEmail}
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 rounded-r-md font-bold transition duration-150"
            >
              {copied ? "Copied!" : "Copy Email"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogDemo;
