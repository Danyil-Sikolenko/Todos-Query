import { createFileRoute } from '@tanstack/react-router';
import { Home } from '../pages/Home';

export const Route = createFileRoute('/')({
  component: Home,
  validateSearch: (search) => {
    return {
      completed:
        search.completed === 'true' || search.completed === 'false'
          ? search.completed
          : undefined,
    };
  },
});

