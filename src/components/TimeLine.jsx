import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const TimeLine = () => {
  const timelineData = [
    {
      year: '2022 - Presente',
      title: 'Desarrollador Senior de Frontend',
      company: 'Tech Innovations Inc.',
      description: 'Lidero el desarrollo de aplicaciones web modernas utilizando React, TypeScript y sistemas de diseño avanzados.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'GraphQL']
    },
    {
      year: '2020 - 2022',
      title: 'Desarrollador de Frontend',
      company: 'Digital Solutions LLC',
      description: 'Implementé interfaces de usuario responsivas y optimicé el rendimiento de aplicaciones web.',
      technologies: ['React', 'Redux', 'Node.js', 'Styled Components']
    },
    
  ];

  return (
    <div className="min-h-screen text-white  flex items-center justify-center">
      <Card className="w-full max-w-4xl bg-neutral-900 border-0">
        <CardHeader>
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
                <div className="absolute left-[-18px]  top-14 transform -translate-y-1/2 w-6 h-6 bg-teal-300 rounded-full"></div>
                
                <div className="ml-8">
                  <div className="text-sm text-gray-400">{item.year}</div>
                  <h3 className="text-xl font-bold text-gray-200 mt-1">{item.title}</h3>
                  <div className="text-lg text-gray-300 mb-2">{item.company}</div>
                  <p className="text-gray-400 mb-3">{item.description}</p>
                  
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
                
                {/* Separador entre elementos, excepto el último */}
              {/*   {index < timelineData.length - 1 && (
                  <div className="">
                    <Separator className="bg-gray-700" />
                  </div>
                )} */}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TimeLine;
