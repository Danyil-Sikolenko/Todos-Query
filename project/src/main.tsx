import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './shared/QueryClient.ts'
import { routeTree } from './routeTree.gen'
import ThemeProvider from './contexts/ThemeContext.tsx'
import './index.css'

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <QueryClientProvider client={queryClient}>
    <ThemeProvider>
          <RouterProvider router={router} />
    </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
)
