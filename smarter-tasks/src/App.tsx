import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import TaskListPage from './pages/TaskListPage';
import Layout from './Layout';
import TaskDetailsPage from './pages/TaskDetailsPage';
import Signin from './pages/Signin';
import ProtectedRoute from './ProtectedRoute';
import Notfound from './pages/Notfound';
import ReactPlayground from './ReactPlayground';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/signin" replace />,
  },
  {
    path: '/signin',
    element: <Signin />,
  },
  {
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: 'home',
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
  {
    path: '/play',
    element: <ReactPlayground />,
  },
  {
    path: '/notfound',
    element: <Notfound />,
  },
  {
    path: '*',
    element: <Navigate to="/notfound" replace />,
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
