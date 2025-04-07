// TechIcon.jsx

/* 
# PURSOPOSE:
-----------------------------------
- This component contains a lot of icons related to technologies.

- You have to pass a list of icons to the component, taking into account that the name of the icon must be the same as the name of the icon in the iconMap object.


# PROPS:
-----------------------------------
- name: The name of the icon you want to use which will map to the iconMap object

- title: The title of the text tha will be desplaye whem you hover over the icon.

- className: The class name that will be added to the icon.

*/

import { FaJava } from "react-icons/fa";
import { FaGolang, FaJ } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";
import { SiKubernetes } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { DiPostgresql } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiSpring } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { SiRabbitmq } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaJenkins } from "react-icons/fa";
import { FaAws } from "react-icons/fa";


const iconMap = {
  java: FaJava,
  golang: FaGolang,
  python: FaPython,
  nodejs: FaNodeJs,
  googlecloud: SiGooglecloud,
  kubernetes: SiKubernetes,
  docker: FaDocker,


  postgresql: DiPostgresql,
  react: FaReact,
  redux: SiRedux,
  spring: SiSpring,
  mysql: DiMysql,
  rabbitmq: SiRabbitmq,
  redis: DiRedis,
  jenkins: FaJenkins,
  aws: FaAws,







};

const TechIcon = ({ name, title, className = '' }) => {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
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
