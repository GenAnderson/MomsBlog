import styles from "./allComponents.module.scss";

const Footer = function () {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footer__professionalInfo}>
          <p>Professional Info here</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
            Modi nam quaerat odit, doloremque est officiis tempora eveniet enim
            beatae, <br />
            nisi exercitationem rem minima ducimus cumque. <br />
            Nobis, consectetur nulla.
          </p>
        </div>
        <ul className={styles.footer__links}>
          <li>Links? Lalalablaaaaaaaaaaaah</li>
          <li>Links? Lalalablaaaaaaaaaaaah</li>
          <li>Links? Lalalablaaaaaaaaaaaah</li>
          <li>Links? Lalalablaaaaaaaaaaaah</li>
          <li>Links? Lalalablaaaaaaaaaaaah</li>
          <li>Links? Lalalablaaaaaaaaaaaah</li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
