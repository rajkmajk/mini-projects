import Homepage from "./homepage/page"
import Projects from "./projects/projects"
import styles from "./page.module.css"


export default function Home() {
  
  return (
    <main className={styles.main}>
      <Homepage />
      <Projects />
    </main>
  )
}
