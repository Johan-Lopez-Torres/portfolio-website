// TechIcon.jsx
import { FaJava } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";
import { SiKubernetes } from "react-icons/si";
import { FaDocker } from "react-icons/fa";

const iconMap = {
  java: FaJava,
  golang: FaGolang,
  python: FaPython,
  nodejs: FaNodeJs,
  googlecloud: SiGooglecloud,
  kubernetes: SiKubernetes,
  docker: FaDocker,
};

const TechIcon = ({ name, title, className = '' }) => {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    // Retornar null si no se encuentra el icono
    console.error(`Icono ${name} no encontrado`);
    return null;
  }

  return (
    <IconComponent
      className={`text-gray-400 hover:text-yellow-200 text-5xl cursor-pointer mx-3 transition-colors duration-100 ease-in-out transform hover:scale-110
        
        ${className}`}
      title={title}
    />
  );
};

export default TechIcon;
