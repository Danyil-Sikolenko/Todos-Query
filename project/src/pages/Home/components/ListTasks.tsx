import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../../../api/getTodos";

export function TaskList () {
     const {data, isLoading, error} = useQuery({ queryKey: ['todos'], queryFn: getTodos })
     console.log(data)
    return(
        <>
       
        </>
    )
}