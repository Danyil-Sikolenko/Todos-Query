import type{ FilterValue } from "../../../shared/types/TasksTypes";
import styles from '../styles/categories.module.css';

 interface CategoriesProps {
  value: FilterValue;
  onChange: (value: FilterValue) => void;
 }

export function Categories({ value, onChange }: CategoriesProps) {
  return (
    <div className={styles.container}>
    <div className={styles.container_btn}>
      <button
        onClick={() => onChange('all')}
        className={value === 'all' ? styles.active : ''}
      >
        All
      </button>
      <button
        onClick={() => onChange('true')}
        className={value === 'true' ? styles.active : ''}
      >
      Completed
      </button>
      <button
        onClick={() => onChange('false')}
         className={value === 'false' ? styles.active : ''}
      >
        Active
      </button>
    </div>
    </div>
  );
}
