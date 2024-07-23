import './App.module.css'
import Header from "./Header.tsx";
import styles from "./App.module.css"
import ProjectSection from "./ProjectSection.tsx";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <ProjectSection />
    </div>
  )
}

export default App
