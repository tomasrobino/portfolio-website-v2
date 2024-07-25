import styles from "./About.module.css"

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <h1 className={styles.title}>I'm <span className={styles.highlight}>Tomas</span>,</h1>
      <h1 className={styles.subtitle}> a web developer seeking to create <span className={styles.highlight}>great</span> user experiences</h1>
    </section>
  )
}