
import { Categories } from './components/Categoties';
import { NewTasks } from './components/AddTasksBoard';
import { TaskList } from './components/ListTasks';
import { useSearch } from '@tanstack/react-router';
import { getRouteApi } from '@tanstack/react-router';
import styles from './styles/home.module.css';

export function Home () {
    const HomeRoute = getRouteApi('/');
     const { completed = 'all' } = HomeRoute.useSearch();

    return(
        <>
        <h1 className={styles.h1}>PERSONAL<br/>TASK MANAGER</h1>
        <div className={styles.container}>
            <Categories />
            <div>
            <NewTasks />
            <TaskList filter={completed}/>
            </div>
        </div>
        </>
    )
}