import React from 'react';
import { TaskItem } from './types';

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

interface TaskFormState {
  title: string;
  description: string;
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: '',
      description: '',
    };
  }
  render() {
    return (
      <form onSubmit={this.addTask}>
        <input
          type="text"
          className="border border-gray-300"
          value={this.state.title}
          onChange={this.titleChanged}
          placeholder="Task Title"
        />
        <input
          type="text"
          id="todoDescription"
          className="border border-black-400"
          value={this.state.description}
          onChange={this.descriptionChanged}
          placeholder="Task Description"
        />
        <button
          type="submit"
          className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        >
          Add item
        </button>
      </form>
    );
  }
  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`er${event.target.value}`);
    this.setState({ title: event.target.value });
  };
  descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ description: event.target.value });
  };

  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.title,
      description: this.state.description,
    };
    this.props.addTask(newTask);
    this.setState({ title: '', description: '' });
    console.log('Submitted the Form now');
    console.log(`${this.state.title}`);
  };
}

export default TaskForm;
