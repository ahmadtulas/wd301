import React, { useState } from 'react';
import { TaskItem } from './types';

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

interface TaskFormState {
  title: string;
  description: string;
  dueDate: string;
}

const TaskForm = (props: TaskFormProps) => {
  const [formState, setFormState] = useState<TaskFormState>({
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
    props.addTask(formState);
    setFormState({ title: '', description: '', dueDate: '' });
  };

  return (
    <>
      <form onSubmit={addTask}>
        <input
          type="text"
          id="todoTitle"
          className="border border-gray-300"
          value={formState.title}
          onChange={titleChanged}
          placeholder="Task Title"
        />
        <input
          type="text"
          id="todoDescription"
          className="border border-black-400"
          value={formState.description}
          onChange={descriptionChanged}
          placeholder="Task Description"
        />
        <input
          type="date"
          id="todoDueDate"
          className="border border-blue-600"
          value={formState.dueDate}
          onChange={dueDateChanged}
          placeholder="Due Date"
        />
        <button
          type="submit"
          className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
          id="addTaskButton"
        >
          Add item
        </button>
      </form>
    </>
  );
};

export default TaskForm;
