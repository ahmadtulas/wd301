import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';
import Notfound from './pages/Notfound';

import Signup from './pages/signup';
import Signin from './pages/signin';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Signup />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/signin',
    element: <Signin />,
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
