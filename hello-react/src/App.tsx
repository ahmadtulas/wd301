import TaskCard from './TaskCard';
import './TaskCard.css';

const App = () => {
  return (
    <div className='grid grid-cols-11 m-10'>      
        <div className='col-start-2 col-span-9'>
          <h1 className='font-extrabold text-2xl text-slate-900'>Smarter Tasks</h1>
          <p><span className='font-bold'>Project:</span> Graduation Final Year Project</p>
        </div>  
      <div className='col-start-2 col-span-4 border-2 border-indigo-600 rounded-lg my-5 py-5'>
        <h1 className='text-center font-bold text-xl'>Pending</h1>
        <TaskCard title="Build the website" dueDate="2023-12-29" completedAtDate="" assigneeName="Mr. Rahul" />
        <TaskCard title="Setup the Server" dueDate="2023-12-27" completedAtDate="" assigneeName="Mr. Manoj"/>
        <button className='p-2 m-2 bg-slate-200 text-left rounded'>+ New Task</button>
      </div>  
      <div className='col-start-7 col-span-4 border-2 border-indigo-600 rounded-lg my-5 py-5'>
        <h1 className='text-center font-bold text-xl'>Done</h1>
        <TaskCard title="Rashan" dueDate="" completedAtDate="2023-12-20" assigneeName="Mr. Ahmad"/>
        <TaskCard title="Goa trip" dueDate="" completedAtDate="2023-12-21" assigneeName="Mr. Rohit"/>
      </div>
    </div>  
  )
}
export default App
