import style from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={style.hero}>
        <div className={style.title}>
        <img src="./foto.jpg" alt="foto" />
      <h1>Silvia Melia</h1>
      </div>
      <div className={style.menu}>
      <p>About</p>
      <p>Experience</p>
      <p>Projects</p>
      </div>
    </section>
  );
};

export default Hero;
