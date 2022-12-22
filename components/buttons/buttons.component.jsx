import styles from "./buttons.module.scss";

export const heroBtn = ({ children }) => {
  return <button className={styles.heroBtn}>{children}</button>;
};
