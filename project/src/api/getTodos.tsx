import type { TodosDTO } from "../shared/types/TasksTypes"
import { BASE_URL } from "../shared/ApiRoute"

export const getTodos = async (): Promise<TodosDTO[]> => {
    try{
        const response = await fetch(`${BASE_URL}`)

         if(!response.ok){
            throw new Error('ERROR')
        }
        const data = response.json()
        return data
    }
    catch(error){
         console.error("Failed fetch", error)
         throw error
    }

}