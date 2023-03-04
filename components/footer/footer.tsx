import Link from "next/link";
import LoginBox from "./loginBox";
import { findLatestBlog } from "../../src/controller";

import React from "react";
import { useState } from "react";
import { useRef } from "react";

import emailjs from "@emailjs/browser";

import styles from "./footer.module.scss";

const Footer = function () {
  const [openLogin, setOpenLogin] = useState(false);

  const form: any = useRef();

  const sendEmail = (event: any) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_7odam6k",
        "template_f64gxgs",
        form.current,
        "f7ubLR15pkBC2Sece"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={styles.footerContainer}>
      <div className={styles.gridContainer}>
        <div className={styles.logoContainer}>
          <img src="logoWhole.png" className={styles.footerLogo} />
        </div>
        <div className={styles.footerFormContainer}>
          <p className={styles.footerText}>
            <strong>Questions or comments? Send us an email here!</strong>
          </p>
          <form ref={form} id={styles.contactForm} onSubmit={sendEmail}>
            <span>
              <input type="name" placeholder="Name" name="name"></input>
              <input type="email" placeholder="Email" name="Email" />
            </span>
            <textarea name="message" placeholder="Type your message here" />
            <input type="submit" value="Send" />
          </form>
        </div>
        <ul className={styles.footer__links}>
          <div className={styles.separateContainer}>
            <li>
              <Link href={`blogs/${findLatestBlog()}`}>Latest blog →</Link>
            </li>

            <div>
              <li onClick={() => setOpenLogin(!openLogin)}>Admin Login</li>
              <div>{openLogin && <LoginBox />}</div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
