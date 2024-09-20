import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const userData = localStorage.getItem('userData');
  const user = userData ? JSON.parse(userData) : null;

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userData');
    localStorage.removeItem('authenticated');
    navigate('/signin');
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Dashboard</h1>
        {user ? (
          <>
            <p className="text-lg text-gray-700">
              Welcome, <strong>{user.name}</strong>!
            </p>
            <p className="text-lg text-gray-700">
              Your email: <strong>{user.email}</strong>
            </p>
            <a
              href="#logout"
              id="logout-link"
              className="text-blue-500 hover:text-blue-700 mt-4 block"
              onClick={handleLogout}
            >
              Logout
            </a>
          </>
        ) : (
          <p className="text-lg text-red-500">No user information available.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
