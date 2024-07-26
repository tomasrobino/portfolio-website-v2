import styles from "./About.module.css"

export default function About() {
  function handleClick() {
    const projects = document.getElementById("projects");
    if (projects) projects.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="about" className={styles.section}>
      <h1 className={`${styles.title} ${styles.fadeIn}`}>I'm <span className={styles.highlight}>Tomas</span>,</h1>
      <h1 className={`${styles.subtitle} ${styles.fadeIn}`}> a web developer seeking to create <span className={styles.highlight}>great</span> user experiences</h1>
      <svg
        onClick={handleClick}
        className={styles.icon}
        width="30vw"
        height="30vh"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
          fill="white"
        />
      </svg>
    </section>
  )
}