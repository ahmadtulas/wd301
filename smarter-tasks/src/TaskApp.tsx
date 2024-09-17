import { TaskItem } from './types';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import './TaskCard.css';
import { useLocalStorage } from './hooks/useLocalStorage';
interface TaskAppProp {}

interface TaskAppState {
  tasks: TaskItem[];
}

const TaskApp: React.FC<TaskAppProp> = () => {
  const [taskAppState, setTaskAppState] = useLocalStorage<TaskAppState>(
    'tasks',
    {
      tasks: [],
    }
  );

  const addTask = (task: TaskItem) => {
    setTaskAppState((prevState) => ({
      ...prevState,
      tasks: [...prevState.tasks, task],
    }));
  };

  const deleteTask = (index: number) => {
    const updatedTasks = taskAppState.tasks.filter((_, idx) => idx !== index);
    setTaskAppState({
      ...taskAppState,
      tasks: updatedTasks,
    });
  };

  return (
    <div>
      <div className="container py-10 max-w-4xl mx-auto">
        <h1 className="text-3xl mb-2 font-bold text-slate-700">
          Smarter Tasks
        </h1>
        <h1 className="text-lg mb-6 text-slate-600">
          <span className="font-bold">Project: </span>
          Graduation Final Year Project (Revamp college website)
        </h1>
        <div className="flex gap-4">
          <div className="flex-1 border border-slate-200 rounded-xl p-4">
            <h1 className="text-slate-500 text-xl font-bold text-center mb-2">
              Add New Task
            </h1>
            <TaskForm addTask={addTask} />
          </div>
          <div className="flex-1 border border-slate-200 rounded-xl p-4">
            <h1 className="text-slate-500 text-xl font-bold text-center mb-2">
              Task List
            </h1>
            <TaskList tasks={taskAppState.tasks} deleteTask={deleteTask} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskApp;
