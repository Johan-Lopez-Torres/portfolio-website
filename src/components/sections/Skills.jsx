import React from "react";
import {
  FaReact,
  FaPython,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";

import { GrGraphQl } from "react-icons/gr";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";

const Skills = () => {
  const skills = [
    { name: "JavaScript", icon: <IoLogoJavascript size={48} /> },
    { name: "React", icon: <FaReact size={48} /> },
    { name: "Python", icon: <FaPython size={48} /> },
    { name: "Node.js", icon: <FaNodeJs size={48} /> },
    { name: "TypeScript", icon: <SiTypescript size={48} /> }, // No hay un ícono específico para TypeScript en react-icons
    { name: "Docker", icon: <FaDocker size={48} /> },
    { name: "Git", icon: <FaGitAlt size={48} /> },
    { name: "MongoDB", icon: <DiMongodb size={48} /> }, // No hay un ícono específico para MongoDB en react-icons
    { name: "AWS", icon: <FaAws size={48} /> },
    { name: "GraphQL", icon: <GrGraphQl size={48} /> },
    { name: "Tailwind", icon: <RiTailwindCssFill size={48} /> }, // No hay un ícono específico para Tailwind en react-icons
    { name: "PostgreSQL", icon: <BiLogoPostgresql size={48} /> }, // No hay un ícono específico para PostgreSQL en react-icons
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br flex items-center justify-center ">
      <div className="w-full max-w-6xl  backdrop-blur-lg rounded-2xl">
        <h1 className="text-5xl font-bold text-center text-teal-500 mb-12">
            Skills
        </h1>
        <div className="grid grid-cols-4 md:grid-cols-6 gap-9 gap-y-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <div className="mb-3">{skill.icon}</div>
              <span className="text-white text-sm font-medium">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
