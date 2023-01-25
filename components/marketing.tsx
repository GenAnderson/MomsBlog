import { useInView } from "react-intersection-observer";

import styles from "./allComponents.module.scss";

const Marketing: any = () => {
  const { ref: refMarket1, inView: market1InView } = useInView({
    triggerOnce: true,
  });

  const { ref: refMarket2, inView: market2InView } = useInView({
    triggerOnce: true,
  });

  const { ref: refMarket3, inView: market3InView } = useInView({
    triggerOnce: true,
  });

  const { ref: refMarket4, inView: market4InView } = useInView({
    triggerOnce: true,
  });

  const { ref: refMarket5, inView: market5InView } = useInView({
    triggerOnce: true,
  });

  return (
    <div className={styles.marketingContainer}>
      <div className={styles.controlledVHcontainer}>
        <div className={styles.marketingTextBox}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
            optio quod, deserunt laudantium iste tenetur et voluptas, vel totam
            nobis quisquam! Alias autem delectveniam magni corrupti consequatur
            soluta praesentium molestiae omnis ratione nesciunt adipisci dicta
            hic est corporis sapiente, veritatis fugiat eos?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
            optio quod, deserunt laudantium iste tenetur et voluptas, vel totam
            nobis quisquam! Alias autem delectus.
          </p>
        </div>
      </div>
      <div className={styles.marketBoxMiniContainer}>
        <div
          ref={refMarket1}
          className={`${styles.marketBoxMini} ${
            market1InView ? styles.market1 : ""
          }`}
        >
          Building rapport through listening for understanding and validation
        </div>
        <div
          ref={refMarket2}
          className={`${styles.marketBoxMini} ${
            market2InView ? styles.market2 : ""
          }`}
        >
          Cognitive Behavioral Therapy to identify and modify thinking errors.
        </div>
        <div
          ref={refMarket3}
          className={`${styles.marketBoxMini} ${
            market3InView ? styles.market3 : ""
          }`}
        >
          Solution Focused Interviewing
        </div>
        <div
          ref={refMarket4}
          className={`${styles.marketBoxMini} ${
            market4InView ? styles.market4 : ""
          }`}
        >
          Strength Based Therapy to identify strengths and support systems
          clients already have.
        </div>
        <div
          ref={refMarket5}
          className={`${styles.marketBoxMini} ${
            market5InView ? styles.market5 : ""
          }`}
        >
          Assertiveness Training to build self-confidence and problem-solving
          skills.
        </div>
      </div>

      {/* <img src="./rose.png" className={styles.marketImg__2} /> */}
    </div>
  );
};

export default Marketing;
