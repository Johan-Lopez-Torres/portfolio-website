import { useEffect, useState } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [activeSection, setActiveSection] = useState("");

  // Función para manejar la intersección de las secciones
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Actualiza la sección activa
          }
        });
      },
      {
        threshold: 0.5, // La sección debe estar al menos un 50% visible
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    
    <nav className=" fixed   top-0 left-0 mx-auto inset-x-0 w-full z-40  backdrop-blur-lg shadow-lg">
      <div className="max-w-5xl mx-auto ">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home" className="font-mono text-xl font-bold text-white">
            Johan <span className="text-teal-300">.tech</span>
          </a>

          {/* Icono de menú para móviles */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          {/* Menú de navegación para dispositivos de escritorio */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-gray-300 transition-colors duration-300 ${
                  activeSection === item.toLowerCase()
                    ? "text-teal-300"
                    : "hover:text-teal-300 focus:text-teal-300"
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
