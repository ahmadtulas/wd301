import React, { useState } from 'react';
import { API_ENDPOINT } from '../../config/constants';

const SignupForm: React.FC = () => {
  const [organisationName, setOrganisationName] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch(`${API_ENDPOINT}/organisations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: organisationName,
          user_name: userName,
          email: userEmail,
          password: userPassword,
        }),
      });

      if (!response.ok) {
        throw new Error('Sign-up failed');
      }
      console.log('Sign-up successful');
    } catch (error) {
      console.error('Sign-up failed:', error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Sign Up
      </h2>

      <div className="mb-4">
        <label
          htmlFor="organisationName"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Organisation Name
        </label>
        <input
          type="text"
          name="organisationName"
          id="organisationName"
          value={organisationName}
          onChange={(e) => setOrganisationName(e.target.value)}
          className="w-full border border-gray-300 rounded-md py-2 px-4 text-gray-700 focus:ring-green-500 focus:border-green-500"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="userName"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Your Name
        </label>
        <input
          type="text"
          name="userName"
          id="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="w-full border border-gray-300 rounded-md py-2 px-4 text-gray-700 focus:ring-green-500 focus:border-green-500"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="userEmail"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email
        </label>
        <input
          type="email"
          name="userEmail"
          id="userEmail"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-md py-2 px-4 text-gray-700 focus:ring-green-500 focus:border-green-500"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="userPassword"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Password
        </label>
        <input
          type="password"
          name="userPassword"
          id="userPassword"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          className="w-full border border-gray-300 rounded-md py-2 px-4 text-gray-700 focus:ring-green-500 focus:border-green-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Sign up
      </button>
    </form>
  );
};

export default SignupForm;
