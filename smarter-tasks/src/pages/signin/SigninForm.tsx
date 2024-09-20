import React, { useState } from 'react';
import { API_ENDPOINT } from '../../config/constants';

const SigninForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch(`${API_ENDPOINT}/users/sign_in`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Sign-in failed');
      }

      console.log('Sign-in successful');
      const data = await response.json();

      localStorage.setItem('authToken', data.token);
      localStorage.setItem('userData', JSON.stringify(data.user));
      localStorage.setItem('authenticated', 'true');
    } catch (error) {
      console.error('Sign-in failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className="block text-green-700 font-semibold mb-2">
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500 focus:shadow-outline-green"
        />
      </div>
      <div>
        <label className="block text-green-700 font-semibold mb-2">
          Password:
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500 focus:shadow-outline-green"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-green mt-4"
      >
        Sign In
      </button>
    </form>
  );
};

export default SigninForm;
