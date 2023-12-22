const TaskCard = (props) => {
  console.log(props)  
  return (
        <div className="p-2 m-2 border-2 border-black-900">
            <h3 className='text-xl font-bold text-red-500'>{props.title}</h3>
                {props.completedAtDate && (
                  <p className="text-green-500">Completed on: {props.completedAtDate}</p>
                )}

                {props.dueDate && (
                  <p className="text-blue-500">Due date: {props.dueDate}</p>
                )}

          </div>
    )
  }

export default TaskCard