import React, { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';

import ThemeContext from './context/theme';

import router from './routes';

const App = () => {
  const currentTheme = useContext(ThemeContext);
  return (
    <div className="App">
      {currentTheme}
      <RouterProvider router={router} />
      {/* <TaskApp /> */}
    </div>
  );
};

export default App;
