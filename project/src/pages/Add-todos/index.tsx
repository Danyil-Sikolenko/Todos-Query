import { useState } from "react";
import { getPosts } from "../../api/getPosts";
import type { PostsProps } from "../../shared/types/TasksTypes";
import { useQuery } from "@tanstack/react-query";
import { keepPreviousData, useMutation, useQueryClient} from "@tanstack/react-query";
import { postPosts } from "../../api/PostPosts";
import { Link } from "@tanstack/react-router";
import styles from './posts.module.css'

export function Posts () {
    const[page , setPage] = useState(1);
    const[inputText, setInputText] = useState('')
    console.log(page)
     const queryClient = useQueryClient()

     const { data, isFetching }= useQuery<PostsProps[]>({ 
        queryKey: ['posts', page], 
        queryFn:({signal})=> getPosts({page}, {signal}), 
        placeholderData:keepPreviousData
    })
        console.log(data)
        console.log('isFetching:', isFetching);


        const mutation = useMutation({
        mutationFn: postPosts,
        onSuccess: (newPost) => {
        console.log( newPost);
        queryClient.setQueryData<PostsProps[]>(['posts', page], (previousData = []) => [ newPost, ...previousData,]
    );
}
  })

  const handleAddTask = () => {
  if (!inputText.trim()) return;

  mutation.mutate({
    userId: 1,
    title: inputText,
    body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit Autem impedit necessitatibus similique illum expedita eius nulla unde harum,  voluptas cumque asperiores, consequuntur provident? Praesentium molestiae sit ipsa ab deleniti iure.'
  });
};


    return(
        <>
      <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <input
          type="text" onChange={(e) => setInputText(e.target.value)} className={styles.input}/>

        <button onClick={handleAddTask}>Add task</button>
      </div>

      <Link to="/" className={styles.link}>
        Back to Home
      </Link>

      {data?.map((item) => (
        <div key={item.id} className={styles.post}>
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.body}>{item.body}</p>
        </div>
      ))}

      <div className={styles.buttons}>
        <button
          className={styles.button}
          onClick={() => setPage((p) => p - 1 )}
        >
          Prev
        </button>
        <button className={styles.button} 
        onClick={() => setPage((p) => p + 1)}>
          Next
        </button>
      </div>

    </div>
        </>
    )
}