import styles from "./allComponents.module.scss";

const Footer = function () {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footer__professionalInfo}>
          <p>
            <strong>Lujean Marshall, CSW</strong>
          </p>
          <ul className={styles.footer__education}>
            <li>
              Master of Social Work Degree - University of Utah Graduate School
              of Social Work.
            </li>
            <li>Bachelor of Social Work Degree - Brigham Young University</li>
            <li>Associate Degree in Behavioral - Utah Valley University</li>
          </ul>
        </div>
        <ul className={styles.footer__links}>
          <li>Latest blog →</li>
          <li>About me</li>
          <li>Links? Lalalablaaaaaaaaaaaah</li>
          <li>Links? Lalalablaaaaaaaaaaaah</li>
          <li>Links? Lalalablaaaaaaaaaaaah</li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
