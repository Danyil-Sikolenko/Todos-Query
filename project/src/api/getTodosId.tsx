import type { TodosDTO } from "../shared/types/TasksTypes"
import { BASE_URL } from "../shared/ApiRoute"

export const getTodosId = async ({ id }:{ id: number| string }, {signal}: {signal?: AbortSignal}): Promise<TodosDTO> => {
    try{
        const response = await fetch(`${BASE_URL}${id}`, {signal})

         if(!response.ok){
            throw new Error('ERROR')
        }
        const data = await response.json()

        return data
    }
    catch(error){
         console.error("Failed fetch", error)
         throw error
    }

}