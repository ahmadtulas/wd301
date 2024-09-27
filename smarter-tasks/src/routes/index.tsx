import { createBrowserRouter, Navigate } from 'react-router-dom';
import NotFound from '../pages/Notfound';
import Signin from '../pages/signin';
import Signup from '../pages/signup';

import AccountLayout from '../layouts/account';
import ProtectedRoutes from './ProtectedRoutes';
import Logout from '../pages/logout';
import Projects from '../pages/projects';
import MembersPage from '../pages/members';
import { Outlet } from 'react-router-dom';
import ProjectContainer from '../pages/projects/ProjectContainer';
import ProjectDetailsIndex from '../pages/project_details';
import NewTask from '../pages/tasks/NewTask';

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
      <ProtectedRoutes>
        <AccountLayout />
      </ProtectedRoutes>
    ),
    children: [
      { index: true, element: <Navigate to="/account/projects" replace /> },
      {
        path: 'projects',
        element: <ProjectContainer />,
        children: [
          { index: true, element: <Projects /> },
          {
            path: ':projectID',
            element: <ProjectDetailsIndex />,
            children: [
              { index: true, element: <></> },
              {
                path: 'tasks',
                children: [
                  { index: true, element: <Navigate to="../" replace /> },
                  {
                    path: 'new',
                    element: <NewTask />,
                  },
                  {
                    path: ':taskID',
                    children: [
                      { index: true, element: <>Show Task Details</> },
                    ],
                  },
                ],
              },
            ],
          },
        ],
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
