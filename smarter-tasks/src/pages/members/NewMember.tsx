import React, { useState } from 'react';
import { useMembersDispatch } from '../../context/members/context';
import { addMember } from '../../context/members/actions';
import { useForm } from 'react-hook-form';

const NewMember = () => {
  const dispatch = useMembersDispatch();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = async (data) => {
    const response = await addMember(dispatch, data);
    if (response?.error) {
      // Set API error to form
      setError('api', { type: 'manual', message: response.error });
    } else {
      setIsOpen(false); // Close modal on success
    }
  };

  return (
    <>
      <div className="p-4">
        <button
          onClick={() => setIsOpen(true)}
          id="new-member-btn"
          className="px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600"
        >
          Add New Member
        </button>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
              <h2 className="text-lg font-semibold mb-4 text-green-600">
                Add New Member
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register('name', { required: 'Name is required' })}
                  placeholder="Name"
                  id="name"
                  className={`mb-4 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.name ? 'border-red-500' : ''}`}
                />
                {errors.name && (
                  <span className="text-red-500 mb-2">
                    {errors.name.message}
                  </span>
                )}

                <input
                  {...register('email', { required: 'Email is required' })}
                  placeholder="Email"
                  id="email"
                  className={`mb-4 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && (
                  <span className="text-red-500 mb-2">
                    {errors.email.message}
                  </span>
                )}

                <input
                  type="password"
                  {...register('password', {
                    required: 'Password is required',
                  })}
                  id="password"
                  placeholder="Password"
                  className={`mb-4 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.password ? 'border-red-500' : ''}`}
                />
                {errors.password && (
                  <span className="text-red-500 mb-2">
                    {errors.password.message}
                  </span>
                )}

                {/* Displaying API error if exists */}
                {errors.api && (
                  <span className="text-red-500 mb-2">
                    {errors.api.message}
                  </span>
                )}

                <div className="flex justify-between">
                  <button
                    type="submit"
                    id="create-member-btn"
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Add Member
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NewMember;
