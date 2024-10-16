import React, { useEffect, useState } from "react";
import style from "./BackToTop.module.scss";

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

 
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <div className={isVisible ? style.visible : style.hidden}>
      <button onClick={scrollToTop} className={style.backToTop}>
        Back to Top
      </button>
    </div>
  );
};

export default BackToTop;
