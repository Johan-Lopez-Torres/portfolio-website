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

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Hook to track scroll progress
  const { scrollYProgress } = useViewportScroll();

  // State to store scroll progress and trigger content visibility
  const [yProgress, setYProgress] = useState(0);

  useEffect(() => {
    return scrollYProgress.onChange((p) => {
      setYProgress(p); // Update progress value as the page scrolls
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

      {/* Pantalla de carga */}
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      {/* Contenido de la aplicación */}
      <div
        className={`min-h-screen px-28 transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-neutral-900 text-yellow-200`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Skills />
        <Ressume />
        <Projects />
        <Contact />
          <ScrollButtons />
      </div>
    </>
  );
}

export default App;
