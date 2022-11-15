import styles from './App.module.css'
import { Header } from './components/Header/Header'
import { TaskList } from './components/TaskList/TaskList'
import { v4 as uuidv4 } from 'uuid';


function App() {
  return (
    <div className={styles.App}>
      <Header />
      {/* TASK LISTING */}
      <TaskList />

    </div>
  )
}

export default App
