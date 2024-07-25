import styles from "./Project.module.css";
import React from "react";

export default function Project(props: { alignment?: boolean , title: string, image: string, description: string }) {
  return (
    <div className={`${styles.project} ${props.alignment ? styles.alignment : ""}`}>
      <img src={props.image} alt={props.title} className={styles.img}/>
      <div className={styles.titleNDesc}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  )
}