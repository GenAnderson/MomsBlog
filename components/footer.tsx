import styles from "./allComponents.module.scss";
import Link from "next/link";
import { useState } from "react";

const Footer = function () {
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.gridContainer}>
          <div className={styles.flexRegularContainer}>
            <div className={styles.logoContainer}>
              <img src="logoWhole.png" className={styles.footerLogo} />
            </div>
            <div className={styles.footer__professionalInfo}>
              <p>
                <strong>Lujean Marshall, CSW</strong>
              </p>
              <ul className={styles.footer__education}>
                <li>
                  Master of Social Work Degree - University of Utah Graduate
                  School of Social Work
                </li>
                <li>
                  Bachelor of Social Work Degree - Brigham Young University
                </li>
                <li>Associate Degree in Behavioral - Utah Valley University</li>
              </ul>
            </div>
          </div>
          <ul className={styles.footer__links}>
            <li>
              <Link href="">Latest blog →</Link>
            </li>
            <li>About me</li>
            <div>
              <li onClick={() => setOpenLogin(!openLogin)}>Admin Login</li>
              {openLogin && (
                <div className={styles.loginBox}>
                  <form>
                    <input
                      className="inputText"
                      type="text"
                      id="loginName"
                      name="loginName"
                      placeholder="Login Name"
                    />
                    <input
                      className="inputText"
                      type="text"
                      id="loginPass"
                      name="loginPass"
                      placeholder="Password"
                    />
                  </form>
                </div>
              )}
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
