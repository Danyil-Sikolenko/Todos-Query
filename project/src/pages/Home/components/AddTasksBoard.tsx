import { useNavigate } from '@tanstack/react-router';
import styles from '../styles/add_task_board.module.css';

export function NewTasks () {
    const navigate = useNavigate()

    return(
        <div className={styles.container}>
            <h3>Tasks</h3>
            <button className={styles.btn_add_tasks}>Add new task</button>
            <button onClick={()=> navigate({ to: '/users' })} className={styles.btn_clear_tasks}>Users</button>
             <div className={styles.decor_container}></div>
        </div>
    )
} 