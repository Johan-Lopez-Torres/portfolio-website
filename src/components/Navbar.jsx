import { useEffect, useState } from "react";
import { IoMenuOutline } from "react-icons/io5";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      let start = window.scrollY;
      let target = section.offsetTop;
      let distance = target - start;
      let startTime = null;

      const scrollAnimation = (currentTime) => {
        if (!startTime) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let progress = Math.min(timeElapsed / 1500, 1);

        window.scrollTo(0, start + distance * progress);

        if (timeElapsed < 1500) {
          window.requestAnimationFrame(scrollAnimation);
        }
      };

      window.requestAnimationFrame(scrollAnimation);
    }
  };

  return (
    <nav className=" fixed top-0 left-0 inset-x-0 w-full z-40 backdrop-blur-lg shadow-lg">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home" className="font-mono text-xl font-bold text-white">
            Johan<span className="text-teal-300">.tech</span>
          </a>

          {/* Icono de menú para móviles */}
          <div
            className="relative cursor-pointer z-40 md:hidden px-4"  // Ajustamos el margen aquí
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <IoMenuOutline size={24} color="white" />
          </div>

          {/* Menú de navegación para dispositivos de escritorio */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.toLowerCase());
                }}
                className={`text-gray-300 transition-colors duration-300 ${
                  activeSection === item.toLowerCase()
                    ? "text-teal-300 font-bold"
                    : "hover:text-teal-300 focus:text-teal-300"
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Menú desplegable para dispositivos móviles */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 py-4">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.toLowerCase());
                  setMenuOpen(false);
                }}
                className={`text-gray-300 transition-colors duration-300 ${
                  activeSection === item.toLowerCase()
                    ? "text-teal-300 font-bold"
                    : "hover:text-teal-300 focus:text-teal-300"
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
