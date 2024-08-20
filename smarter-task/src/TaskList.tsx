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
    componentDidMount(): void {
        const tasks= [
            {title: 'One one one todo'},
            {title: 'Two two two todo'},
           
        ];
        
        this.setState((state,props) => (
            {
                tasks
            }
        ));
        
        
        
    }
    render(){
        return <>{this.state.tasks.map((task,idx)=>( <Task key={idx} title={task.title}/>
    ))}
    </>
    }
}
export default TaskList