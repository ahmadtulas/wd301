import React from 'react';
import { TaskItem } from './types';

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

interface TaskFormState {
  title: string;
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: '',
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
        />
        <button type="submit" className="border border-balck-600">
          Add item
        </button>
      </form>
    );
  }
  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`er${event.target.value}`);
    this.setState({ title: event.target.value });
  };

  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.title,
    };
    this.props.addTask(newTask);
    this.setState({ title: '' });
    console.log('Submitted the Form now');
    console.log(`${this.state.title}`);
  };
}

export default TaskForm;
