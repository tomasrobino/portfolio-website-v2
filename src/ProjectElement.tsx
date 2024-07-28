import styles from "./ProjectElement.module.css";
import React from "react";
import {Link} from "react-router-dom";

const ProjectElement = React.forwardRef((props: { alignment?: boolean , id: string, title: string, image: string, description: string }, ref: React.ForwardedRef<HTMLDivElement>) => {
  return (
    <Link to={`/projects/${props.id}`} className={styles.link}>
      <div ref={ref} className={`${styles.project} ${props.alignment ? styles.alignment : ""}`}>
        <img src={props.image} alt={props.title} className={`${styles.img} ${props.alignment ? styles.rightImg : ""}`}/>
        <div className={`${styles.titleNDesc} ${props.alignment ? styles.justify : ""}`}>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
      </div>
    </Link>
  )
})

export default ProjectElement;