import { useEffect, useState } from "react";
import { IoMenuOutline } from "react-icons/io5";

export const Navbar = ({ menuOpen, setMenuOpen, setIsModalOpen }) => {
  const [activeSection, setActiveSection] = useState("");
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Detectar dirección de scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false); // Oculta cuando bajas
      } else {
        setShowNavbar(true); // Muestra cuando subes
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Detectar sección activa
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
    <nav
      className={`fixed top-0 left-0 inset-x-0 w-full z-40 backdrop-blur-lg shadow-lg transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            Johan<span className="text-teal-300">.Lopez</span>
          </a>

          <div
            className="relative cursor-pointer z-40 md:hidden px-4"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <IoMenuOutline size={24} color="white" />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Skills", "Projects", "Contact", "Email"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  if (item === "Email") {
                    setIsModalOpen(true);
                  } else {
                    scrollToSection(item.toLowerCase());
                  }
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

        {menuOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 py-4">
            {["Home", "About", "Skills", "Projects", "Contact", "Email"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  if (item === "Email") {
                    setIsModalOpen(true);
                  } else {
                    scrollToSection(item.toLowerCase());
                  }
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
