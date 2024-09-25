import React from 'react';
import { useForm } from 'react-hook-form';
import { API_ENDPOINT } from '../../config/constants';
import { useNavigate } from 'react-router-dom';

const SigninForm: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      const response = await fetch(`${API_ENDPOINT}/users/sign_in`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Sign-in failed');
      }

      console.log('Sign-in successful');
      const responseData = await response.json();

      localStorage.setItem('authToken', responseData.token);
      localStorage.setItem('userData', JSON.stringify(responseData.user));
      localStorage.setItem('authenticated', 'true');
      navigate('/account');
    } catch (error) {
      console.error('Sign-in failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="block text-green-700 font-semibold mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          {...register('email', { required: 'Email is required' })}
          className={`w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500 focus:shadow-outline-green ${errors.email ? 'border-red-500' : ''}`}
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </div>
      <div>
        <label className="block text-green-700 font-semibold mb-2">
          Password:
        </label>
        <input
          type="password"
          id="password"
          {...register('password', { required: 'Password is required' })}
          className={`w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500 focus:shadow-outline-green ${errors.password ? 'border-red-500' : ''}`}
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
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
