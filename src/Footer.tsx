import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer>
      <hr/>
      <div className={styles.footer}>
        <a href={"https://www.linkedin.com/in/tomas-robino/"} target={"_blank"}>linkedIn</a>
        <a href={"https://github.com/tomasrobino"} target={"_blank"}>github</a>
        <a href={"mailto:tomaserobino@gmail.com"}>contact</a>
      </div>
    </footer>
  )
}