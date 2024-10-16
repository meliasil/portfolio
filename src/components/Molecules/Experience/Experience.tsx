import { useEffect, useRef, useState } from "react";
import style from "./Experience.module.scss";

interface Job {
  title: string;
  company: string;
  period: string;
  tasks: string[];
}

const jobs: Job[] = [
  {
    title: "Front-End Developer",
    company: "XYZ Company",
    period: "Jan 2020 - Present",
    tasks: [
      "Developed responsive web applications using React.js and Next.js",
      "Collaborated with designers to create intuitive user interfaces",
      "Improved website performance, resulting in 30% faster loading times",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "ABC Inc.",
    period: "June 2019 - Dec 2019",
    tasks: [
      "Assisted in maintaining and updating company websites",
      "Worked with cross-functional teams to implement web solutions",
      "Contributed to the development of internal tools and dashboards",
    ],
  },
];

const Experience: React.FC = () => {
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
      id="experience"
      ref={sectionRef}
      className={`${style.experience} ${animate ? style.animate : ""}`}
    >
      <h2>Experience</h2>
      <div className={style.jobSection}>
        {jobs.map((job, index) => (
          <div className={style.job} key={index}>
            <h3>
              {job.title} at {job.company}
            </h3>
            <p>{job.period}</p>
            <ul>
              {job.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
