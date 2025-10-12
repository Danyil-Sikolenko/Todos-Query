import { BASE_URL } from "../shared/ApiRoute";
import type { PostsProps } from "../shared/types/TasksTypes";

export const postPosts = async (newPost: Omit<PostsProps, 'id'>): Promise<PostsProps> => {
  try{
    const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...newPost,
      id: (Math.random() * 1000000),
    }),
  });

  if (!response.ok) {
    throw new Error("ERROR");
  }

  const data = await response.json();
  return data;
  }
  catch(error){
     throw new Error(`ERROR: ${error.message}`)
  }
};
