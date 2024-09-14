import TaskApp from './TaskApp';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TaskListPage from './pages/TaskListPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/tasks',
    element: <TaskListPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* <TaskApp /> */}
    </div>
  );
}

export default App;
