import { useNavigate } from '@tanstack/react-router';
import styles from '../styles/add_task_board.module.css';

export function NewTasks () {
    const navigate = useNavigate()

    return(
        <div className={styles.container}>
            <h3>Tasks</h3>
            <button onClick={() => navigate({to: '/posts'})} className={styles.btn_add_tasks}>My Posts</button>
            <button onClick={()=> navigate({ to: '/users' })} className={styles.btn_example_tasks}>Users Example</button>
             <div className={styles.decor_container}></div>
        </div>
    )
} 