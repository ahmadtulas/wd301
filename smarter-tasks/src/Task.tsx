import React from 'react';
interface TaskProp {
  id: string;
  title: string;
  description: string;
  dueDate: string;
}
class Task extends React.Component<TaskProp> {
  render() {
    return (
      <div className="TaskItem shadow-md border border-slate-100">
        <p>{this.props.id}</p>
        <a href={`/tasks/${this.props.id || ''}`}>
          <h2 className="text-base font-bold my-1">{this.props.title}</h2>
        </a>
        <p className="text-sm text-slate-500">Due Date: {this.props.dueDate}</p>
        <p className="text-sm text-slate-500">
          Description: {this.props.description}
        </p>
      </div>
    );
  }
}

export default Task;
