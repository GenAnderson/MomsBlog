import { useState, useEffect } from "react";

import styles from "./heroSlider.module.scss";

const HeroSlider = function () {
  const [slide, setSlide] = useState(0);
  const imagesCompiled = ["slide1.jpg", "slide2.jpg", "slide3.jpg"];

  useEffect(() => {
    const timer = setInterval(
      () => setSlide((oldSlide) => (oldSlide + 1) % imagesCompiled.length),
      3000
    );
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={styles.slideContainer}>
      {imagesCompiled.map((img, index) => (
        <img
          src={img}
          key={index}
          className={styles.welcome__slide}
          style={index === slide ? { opacity: 1 } : { opacity: 0 }}
        />
      ))}
    </div>
  );
};

export default HeroSlider;
