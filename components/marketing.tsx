import { useInView } from "react-intersection-observer";

import styles from "./allComponents.module.scss";

const Marketing: any = () => {
  const { ref: refMarketMiddle, inView: middleInView } = useInView({
    triggerOnce: true,
  });

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
          <img src="./flower4.jpg" className={styles.marketingImg} />
          <div>
            <p className={styles.miniHeader}>
              <em>Aloha, I'm Lujean</em>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
              optio quod, deserunt laudantium iste tenetur et voluptas, vel
              totam nobis quisquam! Alias autem delectveniam magni corrupti
              consequatur soluta praesentium molestiae omnis ratione nesciunt
              adipisci dicta hic est corporis sapiente, veritatis fugiat eos?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
              optio quod, deserunt laudantium iste tenetur et voluptas, vel
              totam nobis quisquam! Alias autem delectus.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.marketBoxMiddleSection}>
        <div
          ref={refMarketMiddle}
          className={`${styles.middleSectionMvmtContainer} ${
            middleInView ? styles.middleInView : ""
          }`}
        >
          <p className={styles.miniHeader}>Heading</p>
          <p className={styles.middleSectionText}>
            Something important or highlight something here. Could be your
            favorite quote, or mantra, etc?
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
          <img
            src="./icon_listen.png"
            className={styles.marketIcons}
            alt="listen icon"
          />
          Building rapport through listening for understanding and validation
        </div>
        <div
          ref={refMarket2}
          className={`${styles.marketBoxMini} ${
            market2InView ? styles.market2 : ""
          }`}
        >
          <img
            src="./icon_cognitive.png"
            className={styles.marketIcons}
            alt="cognitive icon"
          />
          Cognitive Behavioral Therapy to identify and modify thinking errors.
        </div>
        <div
          ref={refMarket3}
          className={`${styles.marketBoxMini} ${
            market3InView ? styles.market3 : ""
          }`}
        >
          <img
            src="./icon_interview.png"
            className={styles.marketIcons}
            alt="interview icon"
          />
          Solution Focused Interviewing
        </div>
        <div
          ref={refMarket4}
          className={`${styles.marketBoxMini} ${
            market4InView ? styles.market4 : ""
          }`}
        >
          <img
            src="./icon_support.png"
            className={styles.marketIcons}
            alt="support icon"
          />
          Strength Based Therapy to identify strengths and support systems
          clients already have.
        </div>
        <div
          ref={refMarket5}
          className={`${styles.marketBoxMini} ${
            market5InView ? styles.market5 : ""
          }`}
        >
          <img
            src="./icon_confidence.png"
            className={styles.marketIcons}
            alt="confidence icon"
          />
          Assertiveness Training to build self-confidence and problem-solving
          skills.
        </div>
      </div>
    </div>
  );
};

export default Marketing;
