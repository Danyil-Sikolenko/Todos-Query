import type{ FilterValue } from "../../../shared/types/TasksTypes";
import { useNavigate, useSearch, getRouteApi } from "@tanstack/react-router";
import styles from '../styles/categories.module.css';


export function Categories() {
    const navigate = useNavigate({from: '/'})

   const HomeRoute = getRouteApi('/');
   const { completed = 'all' } = HomeRoute.useSearch();

  const handleClick = (value: FilterValue) => {
    navigate({
      search: {
        completed: value === 'all' ? undefined : value,
      },
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.container_btn}>
        <button
          onClick={() => handleClick('all')}
          className={completed === 'all' ? styles.active : ''}
        >
          All
        </button>
        <button
          onClick={() => handleClick('true')}
          className={completed === 'true' ? styles.active : ''}
        >
          Completed
        </button>
        <button
          onClick={() => handleClick('false')}
          className={completed === 'false' ? styles.active : ''}
        >
          Active
        </button>
      </div>
    </div>
  );
}
