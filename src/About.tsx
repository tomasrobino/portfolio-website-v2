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
      <svg onClick={handleClick} className={styles.icon} viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M17 9.5L12 14.5L7 9.5" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"></path>
        </g>
      </svg>
    </section>
  )
}