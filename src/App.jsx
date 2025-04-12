import { useState, useEffect } from "react";
import { motion, useViewportScroll } from "framer-motion";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import "./index.css";
import { Contact } from "./components/sections/Contact";
import Ressume from "./components/sections/RessumePage";
import Skills from "./components/sections/Skills";
import ScrollButtons from "./components/ScrollButtons";
import Footer from "./components/Footer";
import DialogDemo from "./components/modals/EmailModal";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { scrollYProgress } = useViewportScroll();
  const [yProgress, setYProgress] = useState(0);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    return scrollYProgress.onChange((p) => {
      setYProgress(p);
    });
  }, [scrollYProgress]);

  return (
    <>
      {/* Barra de progreso */}
      <motion.div
        className="progress-bar"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          backgroundColor: "#5DE9B5",
          transformOrigin: "left",
          zIndex: 1000,
        }}
        animate={{ scaleX: yProgress }}
        transition={{ duration: 0.1 }}
      />

      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`min-h-screen px-28 md:px-44 transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-neutral-900 text-yellow-200`}
      >
        <Navbar
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          setIsModalOpen={setIsModalOpen}
        />
        {isModalOpen && (
          <DialogDemo isOpen={isModalOpen} closeDialog={() => setIsModalOpen(false)} />
        )}
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <div className="h-20"></div>
        <About />
        <div className="lg:h-0 h-20"></div>
        <Skills />
        <div className="lg:h-0 h-20"></div>
        <Ressume />
        <div className="h-16"></div>
        <Projects />
        <div className="h-16"></div>
        <Contact />
        <ScrollButtons />
      </div>
      <Footer />
    </>
  );
}

export default App;
