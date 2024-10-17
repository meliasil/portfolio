import style from "./Hero.module.scss";
import GeometricShapes from "@/components/Atoms/GeometricShapes/GeometricShapes";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className={style.hero}>
      <GeometricShapes />
      <div className={style.title}>
        <Image
          className={style.img}
          src="/foto.jpg"
          alt="Silvia Melia"
          width={210}
          height={250}
        />
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
