import styles from "./ProjectSection.module.css"
import ProjectElement from "./ProjectElement.tsx";

export default function ProjectSection() {
  interface Project {
    languages: string[];
    url: string;
    image: string;
    title: string;
    description: string;
  }

  const projectsArray: Project[] = [
    {
      languages: ["Typescript", "Node.js"],
      url: "terrain-generator",
      image: "https://placehold.co/1000",
      title: "Terrain Generator",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum dictum nisi, eget vestibulum mi tempus sit amet. Nulla lobortis elementum mauris, et auctor sapien condimentum mattis."
    },
    {
      languages: ["Javascript", "Node.js"],
      url: "image-to-ascii",
      image: "https://placehold.co/1000",
      title: "Image to ASCII",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum dictum nisi, eget vestibulum mi tempus sit amet. Nulla lobortis elementum mauris, et auctor sapien condimentum mattis."
    },
    {
      languages: ["Javascript", "Node.js"],
      url: "game-of-life",
      image: "https://placehold.co/1000",
      title: "Game of Life",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum dictum nisi, eget vestibulum mi tempus sit amet. Nulla lobortis elementum mauris, et auctor sapien condimentum mattis."
    },
    {
      languages: ["Javascript", "Node.js"],
      url: "imdb-scraper",
      image: "https://placehold.co/1000",
      title: "IMDB Scraper",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum dictum nisi, eget vestibulum mi tempus sit amet. Nulla lobortis elementum mauris, et auctor sapien condimentum mattis."
    },
    {
      languages: ["Javascript", "Node.js"],
      url: "movie-list",
      image: "https://placehold.co/1000",
      title: "Movie List",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum dictum nisi, eget vestibulum mi tempus sit amet. Nulla lobortis elementum mauris, et auctor sapien condimentum mattis."
    },
    {
      languages: ["React", "TypeScript", "Axios"],
      url: "vg-showcase",
      image: "https://placehold.co/1000",
      title: "Videogame Showcase",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum dictum nisi, eget vestibulum mi tempus sit amet. Nulla lobortis elementum mauris, et auctor sapien condimentum mattis."
    },
    {
      languages: ["Python", "IP API", "Open Meteo"],
      url: "plain-weather-cli",
      image: "https://placehold.co/1000",
      title: "PLain Weather (CLI)",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum dictum nisi, eget vestibulum mi tempus sit amet. Nulla lobortis elementum mauris, et auctor sapien condimentum mattis."
    },
    {
      languages: ["Javascript", "HTML", "CSS", "IP API", "Open Meteo"],
      url: "plain-weather",
      image: "https://placehold.co/1000",
      title: "PLain Weather",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum dictum nisi, eget vestibulum mi tempus sit amet. Nulla lobortis elementum mauris, et auctor sapien condimentum mattis."
    },
    {
      languages: ["Java", "MySQL"],
      url: "banking-program",
      image: "https://placehold.co/1000",
      title: "Banking Program",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum dictum nisi, eget vestibulum mi tempus sit amet. Nulla lobortis elementum mauris, et auctor sapien condimentum mattis."
    },
    {
      languages: ["React", "Node.js", "Express"],
      url: "cayetano-vende",
      image: "https://placehold.co/1000",
      title: "Cayetano Vende",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum dictum nisi, eget vestibulum mi tempus sit amet. Nulla lobortis elementum mauris, et auctor sapien condimentum mattis."
    },
    {
      languages: ["React"],
      url: "actas-website",
      image: "https://placehold.co/1000",
      title: "Actas Website",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum dictum nisi, eget vestibulum mi tempus sit amet. Nulla lobortis elementum mauris, et auctor sapien condimentum mattis."
    },
    {
      languages: ["Javascript", "HTML", "CSS", "Webpack", "Pixi.js"],
      url: "tetris",
      image: "https://placehold.co/1000",
      title: "Tetris",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum dictum nisi, eget vestibulum mi tempus sit amet. Nulla lobortis elementum mauris, et auctor sapien condimentum mattis."
    },
    {
      languages: ["Javascript", "HTML", "CSS", "Webpack", "Pixi.js"],
      url: "chess",
      image: "https://placehold.co/1000",
      title: "Chess",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum dictum nisi, eget vestibulum mi tempus sit amet. Nulla lobortis elementum mauris, et auctor sapien condimentum mattis."
    },
  ];

  const projectElementsArray = [];

  for (let i = 0; i < projectsArray.length; i++) {
    const project = projectsArray[i];
    projectElementsArray.push(<ProjectElement
      alignment={i%2 !== 0}
      languages={project.languages}
      id={project.url}
      title={project.title}
      image={project.image}
      description={project.description}
    />);
  }

  return (
    <div className={styles.section} id="projects">
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.group}>
        {...projectElementsArray}
      </div>
    </div>
  )
}