import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TaskListPage from './pages/TaskListPage';
import Layout from './Layout';
import TaskDetailsPage from './pages/TaskDetailsPage';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/tasks',
        element: <TaskListPage />,
      },
      {
        path: 'tasks/:id',
        element: <TaskDetailsPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* <TaskApp /> */}
    </div>
  );
};

export default App;
