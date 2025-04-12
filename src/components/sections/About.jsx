import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Vue",
    "TypeScript",
    "TailwindCSS",
    "Svelte",
  ];

  const backendSkills = ["Node.js", "Python", "AWS", "MongoDB", "GraphQL"];

  const devopsSkills = [
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Terraform",
    "Ansible",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center "
    >
      <RevealOnScroll>
        <div className="min-w-60 max-w-3xl mx-auto  ">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r text-teal-400 text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-teal-700 text-white py-1 px-3 rounded-full text-sm hover:bg-teal-900 transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-teal-700 text-white py-1 px-3 rounded-full text-sm hover:bg-teal-900 transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Devops</h3>
                <div className="flex flex-wrap gap-2">
                  {devopsSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-teal-700 text-white py-1 px-3 rounded-full text-sm hover:bg-teal-900 transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>
                    {" "}
                    Graduate in Systems and Computer Engineering{" "}
                  </strong>{" "}
                  - Universidad Nacional del Santa (2019-2024)
                </li>
                <li>
                  Relevant Coursework: Data Structures, Web Development, Cloud
                  Computing...
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🎓 Certificates </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>AWS for Web Developers</strong>, Udemy (Feb 2025)
                </li>
                <li>
                  <strong>GitHub Foundations</strong>, GitHub (Jan 2025 – Jan
                  2028)
                </li>
                <li>
                  <strong>Scrum Fundamentals</strong>, SCRUMstudy (Feb 2024)
                </li>
                <li>
                  <strong>Azure: Architecture & Services</strong>, Microsoft
                  (Nov 2023)
                </li>
                <li>
                  <strong>Azure: Cloud Concepts</strong>, Microsoft (Nov 2023)
                </li>
                <li>
                  <strong>AZ-305 Prerequisites</strong>, Microsoft (Nov 2023)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
