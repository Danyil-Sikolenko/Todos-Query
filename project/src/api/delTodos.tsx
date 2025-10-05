import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { TodosDTO } from "../shared/types/TasksTypes"
import { BASE_URL } from "../shared/ApiRoute"

export const useDeleteTodo = (page: number) => {
  const queryClient = useQueryClient();

  const DeleteTodos = useMutation({
    mutationFn:  async (id: number) => {
      await fetch(`${BASE_URL}${id}`, {
        method: 'DELETE'
      });
      return id;
    },
    onSuccess: (id) => {
      queryClient.setQueryData<TodosDTO[]>(['todos', page], (prev = []) =>
        prev.filter(todo => todo.id !== id)
      );
    }
  })
  return DeleteTodos
};
