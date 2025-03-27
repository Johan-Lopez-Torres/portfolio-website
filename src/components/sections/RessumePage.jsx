import React from "react";
import resumeImage from "../../assets/ressume.jpg"; // Asegúrate de que la imagen esté en esta ruta
import TimeLine from "../TimeLine.jsx";

const Ressume = () => {
  return (
    <div className="h-screen flex flex-row justify-center items-center overflow-hidden">
      <div className="max-w-full w-1/2 max-h-full overflow-hidden flex flex-col justify-center items-center">
        <div className="mb-4">
          <h1 className="text-3xl text-teal-400 font-bold">Ressume</h1>
        </div>

        {/* Contenedor de imagen y texto */}
        <a
          href="https://www.linkedin.com/in/johan-lopez-torres/overlay/1737727230752/single-media-viewer/?profileId=ACoAAD59S9gB5t4AZw8grtBcdiOuJZCqgPqOhB0" // Cambia esta ruta al archivo PDF de tu CV
          target="_blank"
          rel="noopener noreferrer"
          className="relative group hover:border-yellow-500 hover:scale-105 hover:shadow-xl hover:border-2 rounded-lg transition-all duration-300 ease-in-out"
// Agregamos un contenedor relativo para posicionar el texto sobre la imagen
        >
          <img
            src={resumeImage} // Usamos la imagen importada
            alt="Vista previa de mi CV"
            className="object-contain w-80 h-xl border-2 border-gray-300 rounded-lg shadow-lg transition-all duration-300 
            
            group-hover:brightness-50" // Efecto de oscurecer la imagen
          />
          {/* Texto de hover */}
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Click to Download
          </div>
        </a>
      </div>

      {/* DIV SEPARATION */}
      <div className="w-1/2">
        <TimeLine />
      </div>
    </div>
  );
};

export default Ressume;
