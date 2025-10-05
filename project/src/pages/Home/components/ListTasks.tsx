import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getTodos } from "../../../api/getTodos";
import { useState } from "react";
import DelBtn from '../../../assets/img/del_btn.svg';
import { useDeleteTodo } from "../../../api/delTodos";
import { useNavigate } from "@tanstack/react-router";
import type { FilterValue } from "../../../shared/types/TasksTypes";

import styles from '../styles/list_tasks.module.css';

export function TaskList ({filter}: {filter: FilterValue}) {
    const[page, setPage] = useState(1)
    const navigate = useNavigate()
    const { mutate } = useDeleteTodo(page)

     const {data, isLoading, error} = useQuery({ 
     queryKey: ['todos', page], 
     queryFn: ({ signal }) => getTodos({ page }, { signal }),
    placeholderData:keepPreviousData 
   })

   const filteredData = data?.filter(item => {
    if (filter === 'true') return item.completed === true;
    if (filter === 'false') return item.completed === false;
    return true;
    });
    console.log(filteredData)

    const handlerNav = (id: string) => {
    navigate({ to: '/$taskId', params: { taskId: id } });
   };

      const handleDelete = (id : number) => {
        mutate(id)
      }

     if(isLoading) {
        return<div>Loading...</div>
     }
     if(error){
        return<div>ERROR!!!</div>
     }

    return(
        <div>
            <div className={styles.container}>
                <ul>
                {filteredData?.map(item => (
                    <li key={item.id}>
                        <input type="checkbox" checked={item.completed} readOnly/>
                        {item.title}
                         <button onClick={()=>handleDelete(item.id)}><img src={DelBtn} alt="#"/></button>
                         <button className={styles.btn_nav} onClick={() => handlerNav(item.id)}>more</button>
                    </li>
                ))}
                </ul>
                <div className={styles.btn_block}>
                 <button onClick={()=> setPage(p => p - 1)}>Prev</button>
                 <button onClick={()=> setPage(p => p + 1)}>Next</button>
                </div>
            </div>
        </div>
    )
}