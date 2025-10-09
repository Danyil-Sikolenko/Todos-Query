export type TodosDTO = {
userId: number,
id: number,
title: string,
completed: boolean,
}

export type FilterValue = 'all' | 'true' | 'false';


export type users ={
  id: number,
  name: string,
  role: string
}
export type PropsRole = 'admin' | 'user' | 'all'

export type PostsProps = {
  userId: number,
  id: number,
  title: string,
  body: string
}