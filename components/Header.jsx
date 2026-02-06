import Link from "next/link";
import { RssIcon } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} aria-label="Wander in Isolation">
          <span className={styles.logoText}>
            <span className={styles.codeText}>Wander</span>
            <span className={styles.island}>in</span>
            <span className={styles.wordsText}>Isolation</span>
          </span>
        </Link>

        <nav className={styles.nav}>
          <Link href="/about" className={styles.navLink}>
            <span>About</span>
          </Link>

          <Link href="/" className={styles.navLink}>
            <span>Articles</span>
          </Link>

          <a href="/rss.xml" target="_blank" className={styles.navLink}>
            <RssIcon />
          </a>
        </nav>
      </div>
    </header>
  );
}
