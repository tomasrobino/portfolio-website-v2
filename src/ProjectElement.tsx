import styles from "./ProjectElement.module.css";
import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import AOS from 'aos';
import "aos/dist/aos.css";


export default function ProjectElement(props: { alignment?: boolean , id: string, title: string, image: string, description: string }) {
  useEffect(( ) => {
    AOS.init();
  }, []);


  return (
    <div data-aos="zoom-in" className={`${styles.project} ${props.alignment ? styles.alignment : ""}`}>
      <Link to={`/projects/${props.id}`} className={styles.link}><img src={props.image} alt={props.title} className={styles.img}/></Link>
      <div data-aos={props.alignment ? "fade-left" : "fade-right"} data-aos-offset="500" className={`${styles.titleNDesc} ${props.alignment ? styles.justify : ""}`}>
        <Link to={`/projects/${props.id}`} className={styles.link}>
          <h1 className={styles.title}>{props.title}</h1>
          <p className={`${styles.desc} ${props.alignment? styles.descRight : ""}`}>{props.description}</p>
        </Link>
      </div>
    </div>
  )
}