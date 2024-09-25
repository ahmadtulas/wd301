import { createBrowserRouter, Navigate } from 'react-router-dom';
import NotFound from '../pages/notfound';
import Signin from '../pages/signin';
import Signup from '../pages/signup';

import AccountLayout from '../layouts/account';
import ProtectedRoute from './ProtectedRoute';
import Logout from '../pages/logout';
import Projects from '../pages/projects';
import MembersPage from '../pages/members';

const router = createBrowserRouter([
  { path: '/', element: <Navigate to="/account/projects" replace /> },
  {
    path: '/signin',
    element: <Signin />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/logout',
    element: <Logout />,
  },
  // Protected Routes
  {
    path: 'account',
    element: (
      <ProtectedRoute>
        <AccountLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Navigate to="/account/projects" replace /> },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'members',
        element: <MembersPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />, // Add this line for 404 page
  },
]);
export default router;
