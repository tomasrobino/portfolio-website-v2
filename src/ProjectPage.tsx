import {ReactElement} from "react";
import styles from "./ProjectPage.module.css"

export default function ProjectPage(props: {title: string, content: ReactElement, img: string}) {

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{props.title}</h1>
      {props.content}
    </div>
  )
}