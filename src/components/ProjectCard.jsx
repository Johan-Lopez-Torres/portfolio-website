// src/components/ProjectCard.jsx
import React from "react";
import TechIcon from "./TechIcon";
import ImageModal from "./modals/ImageModal";




const ProjectCard = ({
  title,
  description,
  techStack,
  imageSrc,
  projectLink,
  icons,
}) => {
  return (
    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500 hover:transition hover:shadow-[1px_-3px_67px_-46px_rgba(234,_179,_8,_0.5)]">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech, key) => (
          <span
            key={key}
            className="bg-teal-700 text-white py-1 px-3 rounded-full text-sm hover:bg-teal-900 transition-all hover:-translate-y-0.5"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="my-6">
{/*         <img className="border-2 rounded-2xl" src={imageSrc} alt={title} />
 */}     
 
 <ImageModal src={imageSrc} alt={title} />
  </div>


      <div className="flex flex-row justify-center mt-4">
        {icons.map((icon, index) => (
          <TechIcon key={index} name={icon.name} title={icon.title}   />
        ))}
      </div>
      <div className="flex justify-between items-center">
        <a
          href={projectLink}
          className="text-yellow-200 hover:font-semibold hover:-translate-y-0.5 transition-colors my-4"
        >
          View Project →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
