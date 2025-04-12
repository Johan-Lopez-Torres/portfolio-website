import { useState, useRef, useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    fetch("https://formsubmit.co/ajax/johanlopezsre@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: form.name.value,
        email: form.email.value,
        message: form.message.value,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        setShowModal(true);
        form.reset(); // limpia el formulario
      })
      .catch(() => alert("Oops! Something went wrong."));
  };

  // Detecta clic fuera del modal
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showModal]);

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center relative">
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3">
          <h2 className="text-3xl font-bold mb-8 text-teal-300 text-center">
            Get In Touch
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                name="name"
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-teal-300 focus:bg-neutral-900"
                placeholder="Name..."
              />
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-teal-300 focus:bg-neutral-900"
                placeholder="example@gmail.com"
              />
            </div>

            <div className="relative">
              <textarea
                name="message"
                required
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-teal-300 focus:bg-neutral-900"
                placeholder="Your Message..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[-1px_1px_41px_-11px_#009689]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>

      {/* ✅ Modal con detección de clics fuera */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div
            ref={modalRef}
            className="bg-neutral-900 p-8 rounded-xl text-center max-w-sm shadow-lg border border-white/10"
          >
            <h3 className="text-2xl text-yellow-200 font-bold mb-2">Thank You!</h3>
            <p className="text-gray-300 mb-4">
              Your message has been sent successfully.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-[#FDE045] text-black px-6 py-2 rounded hover:bg-yellow-400 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
