import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
function App() {
  return (
    <div className="App">
      <TaskList tasks={[]}/>
      <TaskForm/>
    </div>
  )
}

export default App
