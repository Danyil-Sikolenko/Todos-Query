import { useContext, useEffect } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

import { Home } from './pages/Home';
import './App.css';

function App() {
  const{theme} = useContext(ThemeContext);

  useEffect(() => {
    document.body.className=`mode-${theme}`;
  }, [theme]);


  return (
    <>
    <Home/>
      
    </>
  )
}

export default App
