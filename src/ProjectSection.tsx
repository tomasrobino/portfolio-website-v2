import styles from "./ProjectSection.module.css"
import Project from "./Project.tsx";
import React, {RefObject, useRef} from "react";

export default function ProjectSection() {
  const ref1: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const ref2: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const ref3: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.section}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.group}>
        <Project ref={ref1} image={"https://picsum.photos/1000"} title={"Example project"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum dictum nisi, eget vestibulum mi tempus sit amet. Nulla lobortis elementum mauris, et auctor sapien condimentum mattis."}/>
        <Project ref={ref2} alignment={true} image={"https://picsum.photos/1000"} title={"Example project"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum dictum nisi, eget vestibulum mi tempus sit amet. Nulla lobortis elementum mauris, et auctor sapien condimentum mattis."}/>
        <Project ref={ref3} image={"https://picsum.photos/1000"} title={"Example project"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum dictum nisi, eget vestibulum mi tempus sit amet. Nulla lobortis elementum mauris, et auctor sapien condimentum mattis."}/>
      </div>
    </div>
  )
}