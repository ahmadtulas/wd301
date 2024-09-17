import React, { useState } from 'react';
import { TaskItem } from './types';

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

interface TaskFormState {
  id: string;
  title: string;
  description: string;
  dueDate: string;
}

const TaskForm = (props: TaskFormProps) => {
  const [formState, setFormState] = useState<TaskFormState>({
    id: '',
    title: '',
    description: '',
    dueDate: '',
  });
  const titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setFormState({ ...formState, title: event.target.value });
  };
  const descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setFormState({ ...formState, description: event.target.value });
  };
  const dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setFormState({ ...formState, dueDate: event.target.value });
  };

  const addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const { title, dueDate } = formState;
    if (title.trim() === '' || dueDate.trim() === '') {
      alert('Title and Due Date are required fields.');
      return;
    }
    const randomId = `${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    const newTask: TaskItem = { ...formState, id: randomId };

    props.addTask(newTask);

    setFormState({ id: '', title: '', description: '', dueDate: '' });
  };

  return (
    <>
      <form
        onSubmit={addTask}
        className="space-y-4 p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto"
      >
        <div>
          <label
            htmlFor="todoTitle"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Task Title
          </label>
          <input
            type="text"
            id="todoTitle"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={formState.title}
            onChange={titleChanged}
            placeholder="Enter task title"
          />
        </div>

        <div>
          <label
            htmlFor="todoDescription"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Task Description
          </label>
          <input
            type="text"
            id="todoDescription"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={formState.description}
            onChange={descriptionChanged}
            placeholder="Enter task description"
          />
        </div>

        <div>
          <label
            htmlFor="todoDueDate"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Due Date
          </label>
          <input
            type="date"
            id="todoDueDate"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={formState.dueDate}
            onChange={dueDateChanged}
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="addTaskButton"
          >
            Add Task
          </button>
        </div>
      </form>
    </>
  );
};

export default TaskForm;
