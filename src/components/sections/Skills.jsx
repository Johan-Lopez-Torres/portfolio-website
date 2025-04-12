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
import { RevealOnScroll } from "../RevealOnScroll";

const Skills = () => {
  const skills = [
    { name: "JavaScript", icon: <IoLogoJavascript size={48} /> },
    { name: "React", icon: <FaReact size={48} /> },
    { name: "Python", icon: <FaPython size={48} /> },
    { name: "Node.js", icon: <FaNodeJs size={48} /> },
    { name: "TypeScript", icon: <SiTypescript size={48} /> },
    { name: "Docker", icon: <FaDocker size={48} /> },
    { name: "Git", icon: <FaGitAlt size={48} /> },
    { name: "MongoDB", icon: <DiMongodb size={48} /> },
    { name: "AWS", icon: <FaAws size={48} /> },
    { name: "GraphQL", icon: <GrGraphQl size={48} /> },
    { name: "Tailwind", icon: <RiTailwindCssFill size={48} /> },
    { name: "PostgreSQL", icon: <BiLogoPostgresql size={48} /> },
  ];

  return (
    <RevealOnScroll>
      <section id="skills" className="min-h-screen flex items-center justify-center ">
          <div className="w-full  max-w-6xl  ">
            <h1 className="text-5xl font-bold  text-center text-teal-500 mb-12">
              Skills
            </h1>
            <div className="grid  px-12   grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-6 gap-9  gap-y-9 md:gap-y-16">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col   items-center justify-center p-4 bg-white/10 rounded-xl transition-transform duration-900 transform hover:rotate-y-180 hover:translate-x-2  hover:bg-white/20"
                >
                  <div className="mb-3   relative perspective-1500 ">
                    <div className="skill-icon ">{skill.icon}</div>
                  </div>
                  <span className="text-white text-sm font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
      </section>
    </RevealOnScroll>
  );
};

export default Skills;
