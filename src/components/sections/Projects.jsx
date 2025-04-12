import { RevealOnScroll } from "../RevealOnScroll";
import arq from "../../assets/arq.png";
import arq2 from "../../assets/arq2.png";
import arq3 from "../../assets/arq3.png";
import arq4 from "../../assets/arq4.png";
import TechIcon from "../TechIcon";
import ProjectCard from "../ProjectCard";

export const Projects = () => {
  const icons = [
    { name: "java", title: "Java" },
    { name: "golang", title: "Golang" },
    { name: "python", title: "Python" },
    { name: "nodejs", title: "Node.js" },
    { name: "googlecloud", title: "Google Cloud" },
    { name: "kubernetes", title: "Kubernetes" },
    { name: "docker", title: "Docker" },
    {name:"dotnet", title:".NET"},
  ];

  const icons2 = [
    { name: "postgresql", title: "PostgreSQL" },
    { name: "react", title: "React" },
    { name: "redux", title: "Redux" },
    { name: "spring", title: "Spring" },
    { name: "mysql", title: "MySQL" },
    { name: "rabbitmq", title: "RabbitMQ" },
    { name: "redis", title: "Redis" },
  ];

  const icons3 = [
    { name: "jenkins", title: "Jenkins" },
    { name: "aws", title: "AWS" },
    { name: "docker", title: "Docker" },
    { name: "kubernetes", title: "Kubernetes" },
    { name: "java", title: "Java" },
    { name: "golang", title: "Golang" },
  ];

  const icons4 = [
    { name: "react", title: "React" },
    { name: "typescript", title: "AWS" },
    { name: "docker", title: "Docker" },
    {name:"tailwind", title:"Tailwind"},
  
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center "
    >
      <RevealOnScroll>
        <div className="min-w-80 max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-teal-400 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <ProjectCard
              title="Microservices-based Eccomerce Platform"
              description="Scalable cloud infrastructure management with real-time monitoring and automated scaling."
              techStack={["React", "Node.js", "AWS", "Docker"]}
              imageSrc={arq}
              projectLink="#"
              icons={icons}
            />

            {/* Project 2 */}
            <ProjectCard
              title="Medical and Health Centre Booking software"
              description="Scalable cloud infrastructure management with real-time monitoring and automated scaling."
              techStack={["React", "Node.js", "AWS", "Docker"]}
              imageSrc={arq2}
              projectLink="#"
              icons={icons2}
            />
            {/* Project 3 */}
            <ProjectCard
              title="CI/CD Pipeline for a Social media platform "
              description="A real-time chat application using WebSockets and Node.js."
              techStack={["React", "Node.js", "WebSockets"]}
              imageSrc={arq3}
              projectLink="#"
              icons={icons3}
            />

            {/* Project 4 */}
            <ProjectCard
              title="Inventory Management System"
              description="A web application for managing inventory, built with TypeScript and React."
              techStack={["React", "Node.js", "WebSockets"]}
              imageSrc={arq4} // Asegúrate de reemplazar `inventoryImage` con la variable o importación correcta para la imagen.
              projectLink="#"
              icons={icons4} // Asegúrate de definir `iconsInventory` con los íconos que deseas mostrar.
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
