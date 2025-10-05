import { useParams } from '@tanstack/react-router'
import { getTodosId } from '../../api/getTodosId'
import { keepPreviousData } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';

import styles from './styles/todo_id.module.css';

export function TodoId() {
  const { taskId } = useParams({ from: '/$taskId' });
  const { data, isLoading, error } = useQuery({
    queryKey: ['todosId', taskId],
    queryFn: ({ signal }) => getTodosId({ id: taskId }, { signal }),
    placeholderData: keepPreviousData,
  });

   console.log(typeof(taskId))
   
  if (isLoading) return <div className={styles.container}>Loadig...</div>;
  if (error) return <div  className={styles.container}>ERROR!!</div>;

  return (
    <div className={styles.container}>
      <Link to={'/'}>Go home</Link>
      <h2>Task{data.id}</h2>
      <p><strong>Title:</strong> {data.title}</p>
    </div>
  )
}