import Image from "next/image";

import Footer from "../../components/footer/footer";

import styles from "./index.module.scss";

function Aboutme() {
  return (
    <div className={styles.pageFlexContainer}>
      <div className={styles.aboutContainer}>
        <Image
          src="/about.jpg"
          className={styles.aboutPhoto}
          alt="LuJean Anderson"
          width="600rem"
          height="800rem"
          objectFit="cover"
        />
        <div className={styles.aboutTextBox}>
          <p className={styles.aboutTextBox__header}>
            Lujean R. Marshall, LCSW
          </p>
          <div className={styles.aboutTextBox__approach}>
            <p className={styles.aboutTextBox__subheader}>Approach</p>
            <em>
              Lujean is passionate about empowering people to overcome
              challenges by drawing on their own inherent strengths and support
              systems. People who come to her office find a safe place to tell
              their story, process their emotions, and learn the knowledge and
              skills needed to find balance in their mental and emotional
              health.
            </em>
          </div>
          <div className={styles.aboutTextBox__education}>
            <p className={styles.aboutTextBox__subheader}>Education</p>
            <ul>
              <li>
                Associate Degree in Behavioral Science at Utah Valley
                University.
              </li>
              <li>
                Bachelor of Social Work Degree at Brigham Young University.
              </li>
              <li>
                Master of Social Work Degree at the University of Utah Graduate
                School of Social Work.
              </li>
              <li>Weber State College Victim Assistance Academy</li>
            </ul>
          </div>
          <div className={styles.aboutTextBox__experience}>
            <p className={styles.aboutTextBox__subheader}>Experience</p>
            <ul>
              <li>
                Utah Valley University’s Turning Point, Center for Personal and
                Career Development, teaching psychoeducational classes covering:
              </li>
              <div>
                <ul>
                  <li>effective communication skills</li>
                  <li>anger management</li>
                  <li>empowerment through accountability</li>
                  <li>positive sense of self </li>
                  <li>stress management</li>
                  <li>problem-solving</li>
                  <li>healthy relationship skills </li>
                </ul>
              </div>
              <li>Utah Domestic Violence Coalition</li>
              <li>Aspen Therapy: Individual therapy</li>
              <li>
                Sequoia Counseling: Group and individual therapy for
                court-ordered clients
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Aboutme;
