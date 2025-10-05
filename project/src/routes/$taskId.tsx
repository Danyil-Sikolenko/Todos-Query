import { createFileRoute } from '@tanstack/react-router'
import { TodoId } from '../pages/TodoId'

export const Route = createFileRoute('/$taskId')({
  component: TodoId,
})

