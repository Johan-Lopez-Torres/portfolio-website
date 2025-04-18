import React from "react";
import resumeImage from "../../assets/ressume.jpg"; // Asegúrate de que la imagen esté en esta ruta
import TimeLine from "../TimeLine.jsx";
import { RevealOnScroll } from "../RevealOnScroll";

const Ressume = () => {
  return (
    <RevealOnScroll>
      <div className=" min-h-screen flex flex-col  md:flex-row  md:justify-center items-center overflow-hidden">
        <div className="ressume-container  min-w-80 max-w-full md:w-1/2 min-h-screen overflow-hidden flex flex-col        items-center">
          <div className="mb-4">
            <h1 className="text-3xl text-teal-400 font-bold">Ressume</h1>
          </div>
          {/* Contenedor de imagen y texto */}
          <a
            href="https://www.linkedin.com/in/johan-lopez-torres/overlay/1737727230752/single-media-viewer/?profileId=ACoAAD59S9gB5t4AZw8grtBcdiOuJZCqgPqOhB0" // Cambia esta ruta al archivo PDF de tu CV
            target="_blank"
            rel="noopener noreferrer"
            className="relative group  w-70  hover:scale-105 hover:shadow-xl hover:border-2 rounded-lg transition-all duration-300 ease-in-out"
            // Agregamos un contenedor relativo para posicionar el texto sobre la imagen
          >
            <img
              src={resumeImage} // Usamos la imagen importada
              alt="Vista previa de mi CV"
              className="object-contain w-72  md:w-80  border-2 border-gray-300 rounded-lg shadow-lg transition-all duration-300
      
              group-hover:brightness-50" // Efecto de oscurecer la imagen
            />
            {/* Texto de hover */}
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Click to Download
            </div>
          </a>
        </div>
        {/* DIV SEPARATION */}
        <div className="h-24 md:h-0"></div>
        {/* TIMELINE COMPONENT */}
        <div className="experience-container  min-h-screen max-w-full md:w-1/2">
          <TimeLine />
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default Ressume;
