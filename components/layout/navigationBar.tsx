import Link from "next/link";

import Image from "next/image";

import styles from "./navigationBar.module.scss";

function NavigationBar() {
  return (
    <div className={styles.stickyNav}>
      <ul className={styles.navContainer}>
        <div className={styles.logoContainer}>
          <li className={styles.navLink}>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="default logo"
                className={styles.logo}
                width="75rem"
                height="50rem"
                objectFit="contain"
              />
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
          <li className={styles.navLink}>
            <Link href="/about">About</Link>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default NavigationBar;
