import styles from "./ProjectSection.module.css"
import Project from "./Project.tsx";
import React, {RefObject, useEffect, useRef} from "react";

export default function ProjectSection() {
  const ref1: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const ref2: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const ref3: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref1.current && ref2.current && ref3.current) {
      const first = ref1.current;
      const second = ref2.current;
      const third = ref3.current;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          entry.time
          if (entry.isIntersecting) {
            entry.target.classList.remove(styles.contract);
            entry.target.classList.add(styles.expand);
          }
        });
      }, {threshold: 0.5});

      const secondObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          entry.time
          if (!entry.isIntersecting) {
            entry.target.classList.remove(styles.expand);
            entry.target.classList.add(styles.contract);
          }
        });
      }, { threshold: 0.3});

      observer.observe(first);
      observer.observe(second);
      observer.observe(third);

      secondObserver.observe(first);
      secondObserver.observe(second);
      secondObserver.observe(third);

      return () => {
        if (first) observer.unobserve(first);
        if (second) observer.unobserve(second);
        if (third) observer.unobserve(third);
      }
    }
  }, [ref1, ref2, ref3]);

  return (
    <div className={styles.section} id="projects">
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.group}>
        <Project ref={ref1} image={"https://picsum.photos/1000"} title={"Example project"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum dictum nisi, eget vestibulum mi tempus sit amet. Nulla lobortis elementum mauris, et auctor sapien condimentum mattis."}/>
        <Project ref={ref2} alignment={true} image={"https://picsum.photos/1000"} title={"Example project"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum dictum nisi, eget vestibulum mi tempus sit amet. Nulla lobortis elementum mauris, et auctor sapien condimentum mattis."}/>
        <Project ref={ref3} image={"https://picsum.photos/1000"} title={"Example project"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum dictum nisi, eget vestibulum mi tempus sit amet. Nulla lobortis elementum mauris, et auctor sapien condimentum mattis."}/>
      </div>
    </div>
  )
}