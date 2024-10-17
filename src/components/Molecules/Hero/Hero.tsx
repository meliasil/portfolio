import style from "./Hero.module.scss";
import GeometricShapes from "@/components/Atoms/GeometricShapes/GeometricShapes";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className={style.hero}>
      <GeometricShapes />
      <div className={style.title}>
        <Image src="./foto.jpg" alt="Silvia Melia" />
        <h1>Silvia Melia</h1>
      </div>
      <div className={style.menu}>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
      </div>
    </section>
  );
};

export default Hero;
