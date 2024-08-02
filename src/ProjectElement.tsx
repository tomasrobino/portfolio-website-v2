import styles from "./ProjectElement.module.css";
import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import AOS from 'aos';
import "aos/dist/aos.css";

const ProjectElement = React.forwardRef((props: { alignment?: boolean , id: string, title: string, image: string, description: string }, ref: React.ForwardedRef<HTMLDivElement>) => {
  useEffect(( ) => {
    AOS.init();
  }, []);


  return (
      <div ref={ref} className={`${styles.project} ${props.alignment ? styles.alignment : ""}`}>
        <Link to={`/projects/${props.id}`} className={styles.link}><img src={props.image} alt={props.title} className={`${styles.img} ${props.alignment ? styles.rightImg : ""}`}/></Link>
        <div data-aos={props.alignment ? "fade-left" : "fade-right"} className={`${styles.titleNDesc} ${props.alignment ? styles.justify : ""}`}>
          <Link to={`/projects/${props.id}`} className={styles.link}>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
          </Link>
        </div>
      </div>
  )
})

export default ProjectElement;