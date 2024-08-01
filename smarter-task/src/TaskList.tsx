import React from "react";
import Task from './Task';
interface Props{}
interface TaskItem{
    title:string;
}
interface State{
    tasks: TaskItem[]
}

class TaskList extends React.Component<Props,State>{
    constructor(props: Props)
    {
        super(props);
        this.state = {tasks: [
            {title: 'One todo'},
            {title: 'Two todo'},
            {title: 'Three todo'},
            {title: 'Four todo'},
        ]}
    }
    render(){
        return <>{this.state.tasks.map((task)=>( <Task title={task.title}/>
    ))}
    </>
    }
}
export default TaskList