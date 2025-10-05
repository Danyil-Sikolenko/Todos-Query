
import { Categories } from './components/Categoties';
import { NewTasks } from './components/AddTasksBoard';
import { TaskList } from './components/ListTasks';
import { useState } from 'react';
import type { FilterValue } from '../../shared/types/TasksTypes';
import styles from './styles/home.module.css';

export function Home () {
    const [filterCompleted, setFilterCompleted] = useState<FilterValue>('all');
    return(
        <>
        <h1 className={styles.h1}>PERSONAL<br/>TASK MANAGER</h1>
        <div className={styles.container}>
            <Categories value={filterCompleted} onChange={setFilterCompleted}/>
            <div>
            <NewTasks />
            <TaskList filter={filterCompleted}/>
            </div>
        </div>
        </>
    )
}