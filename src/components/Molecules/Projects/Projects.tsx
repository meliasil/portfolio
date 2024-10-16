import { useEffect, useRef, useState } from "react";
import style from "./Projects.module.scss";

interface Project {
  name: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    name: "Personal Portfolio",
    description:
      "A personal website showcasing my projects, experience, and skills.",
    link: "https://myportfolio.com",
  },
  {
    name: "E-commerce Store",
    description:
      "An online store built with React and Next.js, featuring product listings and payment integration.",
    link: "https://mystore.com",
  },
  {
    name: "Weather App",
    description:
      "A weather forecasting app using OpenWeather API to display real-time weather conditions.",
    link: "https://weatherapp.com",
  },
];

const Projects: React.FC = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    const sectionTop = sectionRef.current?.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop && sectionTop < windowHeight * 0.8) {
      setAnimate(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`${style.projects} ${animate ? style.animate : ""}`}
    >
      <h2>Projects</h2>
      <div className={style.projectSection}>
        {projects.map((project, index) => (
          <div className={style.project} key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
