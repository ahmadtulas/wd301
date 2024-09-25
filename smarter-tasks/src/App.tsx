import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';

import { ThemeContext } from './context/theme';

import router from './routes';
import { ProjectsProvider } from './context/projects/context';

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`h-screen w-full mx-auto py-2 ${theme === 'dark' ? 'dark' : ''}`}
    >
      {theme}
      <ProjectsProvider>
        <RouterProvider router={router} />
      </ProjectsProvider>
      {/* <TaskApp /> */}
    </div>
  );
};

export default App;
