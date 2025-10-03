import styles from '../styles/add_task_board.module.css';

export function NewTasks () {
    return(
        <div className={styles.container}>
            <h3>5 tasks</h3>
            <button className={styles.btn_add_tasks}>Add new task</button>
            <button className={styles.btn_clear_tasks}>Clear completed</button>
             <div className={styles.decor_container}></div>
        </div>
    )
} 