import { createRootRoute, Outlet,} from '@tanstack/react-router';
import { useContext, useEffect } from 'react';
import { ThemeButton } from '../components/ThemeButton';
import { ThemeContext } from '../contexts/ThemeContext';

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout () {

const{theme} = useContext(ThemeContext) ;

 useEffect(() => {
    document.body.className=`mode-${theme}`;
  }, [theme]);

return(
  <div>
      <ThemeButton />
    <main>
      <Outlet />
    </main>
  </div>
)
} 