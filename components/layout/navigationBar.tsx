import Link from "next/link";
import styles from "./allLayout.module.scss";

function NavigationBar() {
  return (
    <div className={styles.stickyNav}>
      <ul className={styles.navContainer}>
        <div className={styles.logoContainer}>
          <li className={styles.navLink}>
            <Link href="/">
              <img src="logo.png" alt="default logo" className={styles.logo} />
            </Link>
          </li>
        </div>
        <div className={styles.subNavContainer}>
          <li className={styles.navLink}>
            <Link href="/blogs/search-blog">Blogs</Link>
          </li>
          <li className={styles.navLink}>
            <Link href="/documents">Documents</Link>
          </li>
          <li className={styles.navLink}>
            <Link href="/inspiration">Inspiration</Link>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default NavigationBar;
