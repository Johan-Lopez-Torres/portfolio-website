import React, { useState, useEffect } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";




const ScrollButtons = () => {
  const [showButtons, setShowButtons] = useState(false);

  // Esta función se ejecuta cuando se hace scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButtons(true);  // Muestra los botones cuando el scroll es mayor a 300px
      } else {
        setShowButtons(false); // Oculta los botones cuando el scroll es menor a 300px
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Función para subir al top con desplazamiento suave y lento
  const scrollToTop = () => {
    const scrollTo = window.scrollY;
    const duration = 1000; // Duración del desplazamiento en ms (más grande = más lento)
    const start = scrollTo;
    const end = 0;
    const change = end - start;
    let startTime = null;

    const animateScroll = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, start + change * progress);

      if (elapsed < duration) {
        window.requestAnimationFrame(animateScroll);
      }
    };

    window.requestAnimationFrame(animateScroll);
  };

  // Función para bajar al bottom con desplazamiento suave y lento
  const scrollToBottom = () => {
    const scrollTo = window.scrollY;
    const duration = 1000; // Duración del desplazamiento en ms (más grande = más lento)
    const start = scrollTo;
    const end = document.documentElement.scrollHeight;
    const change = end - start;
    let startTime = null;

    const animateScroll = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, start + change * progress);

      if (elapsed < duration) {
        window.requestAnimationFrame(animateScroll);
      }
    };

    window.requestAnimationFrame(animateScroll);
  };

  return (
    <>
      {showButtons && (
        <div
          className="fixed  bottom-40  right-4 lg:bottom-7  lg:right-7 flex flex-col items-center space-y-3 opacity-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: showButtons ? 1 : 0 }} // Transición suave en la opacidad de los botones
        >
          {/* Botón de subir */}
          <button
            onClick={scrollToTop}
            className="shadow-lg transition-all duration-300 ease-in-out transform hover:scale-125 active:scale-95"
          >
            <FaArrowAltCircleUp className="hover:border-4   rounded-full" size={45} />
          </button>

          {/* Espacio entre los botones */}
          <div className="h-4"></div>

          {/* Botón de bajar */}
          <button
            onClick={scrollToBottom}
            className="shadow-lg transition-all duration-300 ease-in-out transform hover:scale-125 active:scale-95"
          >
            <FaArrowAltCircleDown className="hover:border-4  rounded-full" size={45} />
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollButtons;
