import React from 'react';
import { useForm } from 'react-hook-form';
import { API_ENDPOINT } from '../../config/constants';
import { useNavigate } from 'react-router-dom';

const SignupForm: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: {
    organisationName: string;
    userName: string;
    userEmail: string;
    userPassword: string;
  }) => {
    try {
      const response = await fetch(`${API_ENDPOINT}/organisations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.organisationName,
          user_name: data.userName,
          email: data.userEmail,
          password: data.userPassword,
        }),
      });

      const responseData = await response.json();
      console.log('API response data:', responseData);
      localStorage.setItem('authToken', responseData.token);

      if (!response.ok) {
        throw new Error('Sign-up failed');
      }

      console.log('Sign-up successful');
      localStorage.setItem('userData', JSON.stringify(responseData.user));
      localStorage.setItem('authenticated', 'true');
      navigate('/account');
    } catch (error) {
      console.error('Sign-up failed:', error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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
          {...register('organisationName', {
            required: 'Organisation name is required',
          })}
          id="organisationName"
          className={`w-full border border-gray-300 rounded-md py-2 px-4 text-gray-700 focus:ring-green-500 focus:border-green-500 ${errors.organisationName ? 'border-red-500' : ''}`}
        />
        {errors.organisationName && (
          <span className="text-red-500">
            {errors.organisationName.message}
          </span>
        )}
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
          {...register('userName', { required: 'User name is required' })}
          id="userName"
          className={`w-full border border-gray-300 rounded-md py-2 px-4 text-gray-700 focus:ring-green-500 focus:border-green-500 ${errors.userName ? 'border-red-500' : ''}`}
        />
        {errors.userName && (
          <span className="text-red-500">{errors.userName.message}</span>
        )}
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
          {...register('userEmail', { required: 'Email is required' })}
          id="userEmail"
          className={`w-full border border-gray-300 rounded-md py-2 px-4 text-gray-700 focus:ring-green-500 focus:border-green-500 ${errors.userEmail ? 'border-red-500' : ''}`}
        />
        {errors.userEmail && (
          <span className="text-red-500">{errors.userEmail.message}</span>
        )}
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
          {...register('userPassword', { required: 'Password is required' })}
          id="userPassword"
          className={`w-full border border-gray-300 rounded-md py-2 px-4 text-gray-700 focus:ring-green-500 focus:border-green-500 ${errors.userPassword ? 'border-red-500' : ''}`}
        />
        {errors.userPassword && (
          <span className="text-red-500">{errors.userPassword.message}</span>
        )}
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
