import './App.module.css'
import Header from "./Header.tsx";
import styles from "./App.module.css"
import ProjectSection from "./ProjectSection.tsx";
import Footer from "./Footer.tsx";
import About from "./About.tsx";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <About />
      <ProjectSection />
      <Footer />
    </div>
  )
}

export default App
