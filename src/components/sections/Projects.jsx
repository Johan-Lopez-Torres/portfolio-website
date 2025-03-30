import { RevealOnScroll } from "../RevealOnScroll";
import arq from "../../assets/arq.png";
import { FaJava } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";
import { SiKubernetes } from "react-icons/si";
import { FaDocker } from "react-icons/fa";

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center ">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-teal-400 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-neutral-800 hover:transition hover:shadow-[0px_4px_25px_-9px_rgba(0,_0,_0,_0.8)]">
              <h3 className="text-xl font-bold mb-2">Cloud Platform</h3>
              <p className="text-gray-400 mb-4">
                Scalable cloud infrastructure management with real-time monitoring and automated scaling.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-teal-700 text-white py-1 px-3 rounded-full text-sm hover:bg-teal-900 transition-all hover:-translate-y-0.5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="my-6">
                 <img className="border-teal-500 border-2 rounded-2xl" src={arq} />
              </div>

              <div className="flex flex-row justify-center mt-4 ">
                <FaJava className="text-gray-400 hover:text-gray-300 text-5xl cursor-pointer mx-3 transition-colors duration-500 ease-in-out transform hover:scale-110" 
                title="Java"
                
                />
                <FaGolang className="text-gray-400 hover:text-gray-300 text-5xl cursor-pointer mx-3 transition-colors duration-500 ease-in-out transform hover:scale-110"
                title="Golang"
                 />
                <FaPython className="text-gray-400 hover:text-gray-300 text-5xl cursor-pointer mx-3 transition-colors duration-500 ease-in-out transform hover:scale-110"
                title="Python"
                 />
                <FaNodeJs className="text-gray-400 hover:text-gray-300 text-5xl cursor-pointer mx-3 transition-colors duration-500 ease-in-out transform hover:scale-110" 
                title="Node.js"
                />
                <SiGooglecloud className="text-gray-400 hover:text-gray-300 text-5xl cursor-pointer mx-3 transition-colors duration-500 ease-in-out transform hover:scale-110"
                title="Google Cloud"
                
                />

                <SiKubernetes className="text-gray-400 hover:text-gray-300 text-5xl cursor-pointer mx-3 transition-colors duration-500 ease-in-out transform hover:scale-110"
                title="Kubernetes"
                />
                <FaDocker className="text-gray-400 hover:text-gray-300 text-5xl cursor-pointer mx-3 transition-colors duration-500 ease-in-out transform hover:scale-110"
                title="Docker"
                />

              </div>
              <div className="flex justify-between items-center">
                <a href="#" className="text-yellow-200 hover:font-semibold  hover:-translate-y-0.5 transition-colors my-4">
                  View Project →
                </a>
              </div>
             

            </div>

            {/* Project 2 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500 hover:transition hover:shadow-[1px_-3px_67px_-46px_rgba(234,_179,_8,_0.5)]">
              <h3 className="text-xl font-bold mb-2">AI Analytics Dashboard</h3>
              <p className="text-gray-400 mb-4">
                ML-powered data visualization platform with predictive analytics and interactive reports.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "TensorFlow", "D3.js", "Flask"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-teal-700 text-white py-1 px-3 rounded-full text-sm hover:bg-teal-900 transition-all hover:-translate-y-0.5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="#" className="text-yellow-400 hover:text-yellow-300 transition-colors my-4">
                  View Project →
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500 hover:transition hover:shadow-[1px_-3px_67px_-46px_rgba(234,_179,_8,_0.5)]">
              <h3 className="text-xl font-bold mb-2">E-Commerce Web App</h3>
              <p className="text-gray-400 mb-4">
                Full-stack e-commerce with modern UI, secure payment integration, and customizable product inventory.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js", "TypeScript", "Stripe", "PostgreSQL"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-teal-700 text-white py-1 px-3 rounded-full text-sm hover:bg-teal-900 transition-all hover:-translate-y-0.5"
                  >
                    {tech}
                  </span>
                ))}
              </div>


              <div className="flex justify-between items-center">
                <a href="#" className="text-yellow-400 hover:text-yellow-300 transition-colors my-4">
                  View Project →
                </a>
              </div>
            </div>

            {/* Project 4 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500 hover:transition hover:shadow-[1px_-3px_67px_-46px_rgba(234,_179,_8,_0.5)]">
              <h3 className="text-xl font-bold mb-2">Real-Time Chat App</h3>
              <p className="text-gray-400 mb-4">
                Scalable chat platform supporting real-time messaging, presence, and group chat features.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Socket.IO", "Express", "React", "Redis"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-teal-700 text-white py-1 px-3 rounded-full text-sm hover:bg-teal-900 transition-all hover:-translate-y-0.5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="#" className="text-yellow-400 hover:text-yellow-300 transition-colors my-4">
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
