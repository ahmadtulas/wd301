import React from "react";

interface TaskFormProps {}

interface TaskFormState {}

class TaskForm extends React.Component<TaskFormProps,TaskFormState> {
    constructor(props: TaskFormProps){
        super(props);
    }
render()
{
    return (
        <form onSubmit={this.addTask}>
           <input type="text" className="border border-gray-300" ref={this.inputRef} />
           <button type="submit" className="border border-balck-600">Add item</button>
        </form>
    )
}
addTask: React.FormEventHandler<HTMLFormElement> = (event) =>{
    event.preventDefault();
    console.log("Submitted the Form");
    console.log(`${this.inputRef.current?.value}`);
}
inputRef = React.createRef<HTMLInputElement>();

}

export default TaskForm