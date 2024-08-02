import styles from "./ProjectSection.module.css"
import ProjectElement from "./ProjectElement.tsx";

export default function ProjectSection() {

  return (
    <div className={styles.section} id="projects">
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.group}>
        <ProjectElement id="1" image={"https://picsum.photos/1000"} title={"Example project"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum dictum nisi, eget vestibulum mi tempus sit amet. Nulla lobortis elementum mauris, et auctor sapien condimentum mattis."}/>
        <ProjectElement id="2" alignment={true} image={"https://picsum.photos/1000"} title={"Example project"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum dictum nisi, eget vestibulum mi tempus sit amet. Nulla lobortis elementum mauris, et auctor sapien condimentum mattis."}/>
        <ProjectElement id="3" image={"https://picsum.photos/1000"} title={"Example project"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum dictum nisi, eget vestibulum mi tempus sit amet. Nulla lobortis elementum mauris, et auctor sapien condimentum mattis."}/>
      </div>
    </div>
  )
}