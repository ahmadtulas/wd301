import React from 'react';
import Task from './Task';
import { TaskItem } from './types';
interface TaskListProps {
  tasks: TaskItem[];
  deleteTask: (index: number) => void;
}

const TaskList = (props: TaskListProps) => {
  return (
    <ul>
      <div className="shadow-md border border-slate-100">
        {props.tasks.map((task, idx) => (
          <li
            key={idx}
            className='className="flex justify-between items-center p-4 border-b"'
          >
            <Task
              title={task.title}
              description={task.description}
              dueDate={task.dueDate}
            />
            <button
              className="deleteTaskButton text-red-500 hover:text-red-700 ml-4 flex items-center"
              onClick={() => props.deleteTask(idx)}
            >
              Delete
            </button>
          </li>
        ))}
      </div>
    </ul>
  );
};
export default TaskList;
