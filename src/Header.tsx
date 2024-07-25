import styles from "./Header.module.css"

export default function Header() {
  return(
    <header>
      <a href={'/'} className={styles.headerLink} style={{ fontSize: "1.3em" }}>Tomas Robino</a>
      <div className={styles.headerGroup}>
        <a href={'#about'} className={styles.headerLink}>about</a>
        <a href={'#projects'} className={styles.headerLink}>projects</a>
      </div>
    </header>
  )
}