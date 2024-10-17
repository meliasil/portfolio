import { useEffect, useRef, useState } from "react";
import style from "./About.module.scss";

const About: React.FC = () => {
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

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`${style.about} ${animate ? style.animate : ""}`}
    >
      <h2>About</h2>
      <p>
        "Hello! I&apos;m Silvia Melia, a passionate web developer with experience in
        creating responsive and dynamic websites. Philosophy graduate, I decided
        to broaden my horizons by embarking on a journey into coding and
        front-end development. What connects these two worlds? My curiosity and
        the desire to explore different forms of expression. I am also
        passionate about politics and issues related to human rights and gender
        equality. In my free time, I find peace and inspiration in nature and
        among my beloved olive trees."
      </p>
    </section>
  );
};

export default About;
