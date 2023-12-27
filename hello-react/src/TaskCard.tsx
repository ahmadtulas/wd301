interface TaskCardProps{
  title: string;
  dueDate?:string;
  completedAtDate?:string;
  assigneeName:string;
}

const TaskCard = (props:TaskCardProps) => {
  console.log(props)  
  return (
        <div className="p-2 m-2 border-2 border-black-900">
            <h3 className='text-xl font-bold text-red-500'>{props.title}</h3>
                {props.completedAtDate && (
                  <p className="text-green-500">Completed on: {props.completedAtDate}</p>
                )}

                {props.dueDate && (
                  <p className="text-blue-500">Due on: {props.dueDate}</p>
                )}
              <p className='text-black-500'>Assignee: {props.assigneeName}</p>
          </div>
    )
  }

export default TaskCard