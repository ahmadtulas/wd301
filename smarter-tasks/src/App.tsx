import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeContext } from './context/theme';
import { ProjectsProvider } from './context/projects/context';
import { MembersProvider } from './context/members/context'; // Add this import
import router from './routes';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`h-screen w-full mx-auto py-2 ${theme === 'dark' ? 'dark' : ''}`}
    >
      {theme}
      <ErrorBoundary>
        <ProjectsProvider>
          <MembersProvider>
            {' '}
            {/* Wrap with MembersProvider */}
            <RouterProvider router={router} />
          </MembersProvider>
        </ProjectsProvider>
      </ErrorBoundary>
    </div>
  );
};

export default App;
