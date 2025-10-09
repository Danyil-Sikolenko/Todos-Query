import { createFileRoute,  } from '@tanstack/react-router';
import { UserFilter } from '../pages/User-Example';

export const Route = createFileRoute('/users')({
  component: UserFilter,
   validateSearch: (search) => {
    return {
      role:
        search.role === 'admin' || search.role === 'user'
          ? search.role : undefined, // это для того что бы показвалось обычная юрл без квери параметров 
    };
  },
})


