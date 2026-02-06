import { LineChart, RssIcon } from "lucide-react";
import Link from "next/link";
import { User } from "react-feather";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo Section */}
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>
            <span className={styles.codeText}>Code</span>
            <span className={styles.island}>🏝️</span>
            <span className={styles.wordsText}>Words</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className={styles.nav}>
          <Link href="/about" className={styles.navLink}>
            <span>About</span>
          </Link>
          <Link href="/" className={styles.navLink}>
            <span>Articles</span>
          </Link>
          <a href="/rss.xml" target="_blank" className={styles.navLink}>
            {/* <span>Subscribe via RSS</span> */}
            <RssIcon />
          </a>
        </nav>
      </div>

      {/* Author Attribution */}
      {/* <div className={styles.author}>
        <span className={styles.dash}>—</span>
        <span className={styles.authorName}>RaJib Das</span>
      </div> */}
    </header>
  );
}
