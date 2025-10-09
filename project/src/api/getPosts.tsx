import { URL_POSTS } from "../shared/ApiRoute"
import type { PostsProps } from "../shared/types/TasksTypes"

export const getPosts = async ({page}: {page: number }, {signal}: {signal?: AbortSignal}) : Promise<PostsProps[]> => {
    try{
        const response = await fetch(`${URL_POSTS}?_page=${page}&_limit=15`, {signal} )

         if(!response.ok){
             throw new Error('Errore')
        }
        const data = await response.json()

        return data

    }
    catch(errore){
        console.error('Errore ', errore)
        throw errore
    }
    
}