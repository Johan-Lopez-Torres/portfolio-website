import { RevealOnScroll } from "../RevealOnScroll";
import foto from "../../assets/foto.jpeg";

import SocialIcons from "../SocialIcons";

export const Home = () => {
  const socialLinks = [
    { platform: "github", url: "https://github.com/Johan-Lopez-Torres" },
    {
      platform: "linkedin",
      url: "https://www.linkedin.com/in/johan-lopez-torres/",
    },
    { platform: "gmail", url: "mailto:johanlopezsre@gmail.com" },
    { platform: "whatsapp", url: "https://wa.me/51969418219" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="flex flex-col    xl:flex-row items-center  lg:justify-between w-full   pt-14">
          {/* Left Content */}
          <div className="text-center xl:text-left md:w-1/2 flex flex-col justify-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-300 to-teal-500 bg-clip-text text-transparent leading-tight text-neon-soft">
              Hi, I'm Johan Lopez
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg">
              I’m a{" "}
              <span className="text-yellow-200 font-bold">
                full-stack developer
              </span>{" "}
              who loves crafting clean, scalable web applications. My goal is to
              build solutions that offer both exceptional performance and a
              delightful user experience.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#projects"
                className="bg-teal-600 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] hover:bg-teal-700"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-teal-600 text-teal-300 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-teal-600 hover:text-white"
              >
                Contact Me
              </a>
            </div>
            <div className="h-3" />
            <SocialIcons socials={socialLinks} />
          </div>

          <div className="h-10 xl:h-0"></div>

          {/* Right Image */}
          <div className="md:w-1/2 flex items-center justify-center lg:justify-end ">
            <img
              src={foto}
              alt="Profile Picture"
              className=" w-60     md:w-72    lg:w-96 max-w-sm p-2 border-teal-300 border-2 brightness-90 md:max-w-md rounded-full transition-transform transform hover:scale-110 hover:opacity-90 duration-500"
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
