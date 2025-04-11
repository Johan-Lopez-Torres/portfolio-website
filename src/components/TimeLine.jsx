import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const TimeLine = () => {
  const timelineData = [
    {
      year: 'Agosto 2024 - Enero 2025',
      title: 'Front-End Developer (Internship)',
      company: 'DEVDATEP CONSULTING',
      description: '- Desarrollé una aplicación frontend amigable y responsiva para la venta de entradas de eventos. - Integré llamadas a la API para gestionar la disponibilidad de boletos y la validación de compras.',
      technologies: ['React', 'JavaScript', 'CSS', 'REST API']
    },
    {
      year: 'Diciembre 2023 - Marzo 2024',
      title: 'Full Stack Developer (Internship)',
      company: 'Cides',
      description: '- Diseñé y desarrollé una aplicación web para el seguimiento de proyectos y gestión de tareas. - Se implementaron funciones de autenticación de usuarios, control de acceso basado en roles, consultas optimizadas a bases de datos y endpoints API para mejorar el rendimiento y la escalabilidad.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT']
    }
  ];

  return (
    <div className="min-h-full text-white flex items-center justify-center">
      <Card className="max-w-4xl bg-neutral-900 border-0 p-0">
        <CardHeader className="p-0 m-0">
          <CardTitle className="text-3xl text-center text-teal-300">
            Experience
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative pl-6">
            {/* Línea vertical */}
            <div className="absolute left-4 top-0 bottom-0 w-[3px] bg-teal-800"></div>
            
            {timelineData.map((item, index) => (
              <div key={index} className="relative pb-8">
                {/* Punto circular dentro de la línea */}
                <div className="absolute left-[-18px] top-14 transform -translate-y-1/2 w-6 h-6 bg-teal-300 rounded-full"></div>
                
                <div className="ml-8">
                  <div className="text-sm text-gray-400">{item.year}</div>
                  <h3 className="text-xl font-bold text-gray-200 mt-1">{item.title}</h3>
                  <div className="text-lg text-gray-300 mb-2">{item.company}</div>
                  <p className="text-gray-400 mb-3">
                    {item.description.split('. ').map((sentence, index) => (
                      <React.Fragment key={index}>
                        {sentence}.
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-teal-700 text-white px-2 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TimeLine;
