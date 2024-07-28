import styles from "./Header.module.css"

export default function Header() {
  function handleAbout() {
    const id =document.getElementById("about")
    if (id) id.scrollIntoView({ behavior: "smooth" })
  }

  function handleProjects() {
    const id =document.getElementById("projects")
    if (id) id.scrollIntoView({ behavior: "smooth" })
  }

  return(
    <header>
      <a href={'/'} className={styles.headerLink} style={{ fontSize: "1.3em" }}>Tomas Robino</a>
      <div className={styles.headerGroup}>
        <p onClick={handleAbout} className={styles.headerLink}>about</p>
        <p onClick={handleProjects} className={styles.headerLink}>projects</p>
      </div>
    </header>
  )
}