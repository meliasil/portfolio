import { useEffect, useRef, useState } from "react";
import style from "./Projects.module.scss";

interface Project {
  name: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    name: "HireGenius",
    description:
      "An innovative application designed to help junior candidates, students, and anyone looking to effectively prepare for interviews, assessments, or quizzes. Leveraging the power of artificial intelligence, the app offers customizable simulations that allow users to tackle questions in a realistic and interactive manner.",
    link: "https://github.com/meliasil/HireGenius",
  },
  {
    name: "E-Commerce",
    description:
      "An online store built with React and Next.js, featuring product listings and payment integration.",
    link: "https://github.com/meliasil/E-commerce",
  },
  {
    name: "Companies Contacts",
    description: "A business contact management app.",
    link: "https://github.com/meliasil/Code-week-Companies-contacts",
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
