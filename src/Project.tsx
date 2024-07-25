import styles from "./Project.module.css";
import React from "react";

const Project = React.forwardRef((props: { alignment?: boolean , title: string, image: string, description: string }, ref: React.ForwardedRef<HTMLDivElement>) => {
  return (
    <div ref={ref} className={`${styles.project} ${props.alignment ? styles.alignment : ""}`}>
      <img src={props.image} alt={props.title} className={`${styles.img} ${props.alignment ? styles.rightImg : ""}`}/>
      <div className={`${styles.titleNDesc} ${props.alignment ? styles.justify : ""}`}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  )
})

export default Project;