
import { Categories } from './components/Categoties';
import { NewTasks } from './components/AddTasksBoard';
import { TaskList } from './components/ListTasks';
import styles from './styles/home.module.css';

export function Home () {
    return(
        <>
        <h1 className={styles.h1}>PERSONAL<br/>TASK MANAGER</h1>
        <div className={styles.container}>
            <div><Categories/></div>
            <div>
            <div><NewTasks/></div>
            <div><TaskList/></div>
            </div>
        </div>
        </>
    )
}