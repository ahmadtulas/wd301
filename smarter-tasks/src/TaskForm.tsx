import React from 'react';
import { TaskItem } from './types';

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

interface TaskFormState {
  title: string;
  description: string;
  dueDate: string;
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: '',
      description: '',
      dueDate: '',
    };
  }
  render() {
    return (
      <form onSubmit={this.addTask}>
        <input
          type="text"
          id="todoTitle"
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
        <input
          type="date"
          id="todoDueDate"
          className="border border-blue-600"
          value={this.state.dueDate}
          onChange={this.dueDateChanged}
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
    );
  }
  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`er${event.target.value}`);
    this.setState({ title: event.target.value });
  };
  descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ description: event.target.value });
  };
  dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ dueDate: event.target.value });
  };

  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const { title, dueDate } = this.state;
    if (title.trim() === '' || dueDate.trim() === '') {
      alert('Title and Due Date are required fields.');
      return;
    }
    const newTask = {
      title: this.state.title,
      description: this.state.description,
      dueDate: this.state.dueDate,
    };
    this.props.addTask(newTask);
    this.setState({ title: '', description: '', dueDate: '' });
    console.log('Submitted the Form now');
    console.log(`${this.state.title}`);
  };
}

export default TaskForm;