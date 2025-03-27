import { RevealOnScroll } from "../RevealOnScroll";
import foto from "../../assets/foto.jpeg";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between w-full max-w-5xl px-4 pt-14">
          {/* Left Content */}
          <div className="text-center md:text-left md:w-1/2 flex flex-col justify-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-300 to-teal-500 bg-clip-text text-transparent leading-tight">
              Hi, I'm Johan Lopez
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg">
              I’m a  <span className="text-yellow-200 font-bold">full-stack developer</span>    who loves crafting clean, scalable web
              applications. My goal is to build solutions that offer both
              exceptional performance and a delightful user experience.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#projects"
                className="bg-teal-600 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-teal-600 text-teal-300 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex items-center justify-center translate-x-11">
            <img
              src={foto}
              alt="Profile Picture"
              className="w-96 max-w-sm p-2 border-teal-300 border-2 brightness-90 md:max-w-md rounded-full transition-transform transform hover:scale-110 hover:opacity-90 duration-500"
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
