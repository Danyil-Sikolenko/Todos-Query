import { createFileRoute } from '@tanstack/react-router'
import { Posts } from '../pages/Add-todos'

export const Route = createFileRoute('/posts')({
  component: Posts,
})

