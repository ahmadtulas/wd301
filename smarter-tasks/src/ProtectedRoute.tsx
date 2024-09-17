import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({
  children,
}: {
  children: JSX.Element;
}) {
  const isAuthenticated = localStorage.getItem('authenticated') === 'true';

  // If the user is not authenticated, redirect to the SignIn page
  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  // If the user is authenticated, render the children components (protected routes)
  return children;
}
