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
        <form>
           <input type="text" className="border border-gray-300" />
           <button type="submit">Add item</button>
        </form>
    )
}
}

export default TaskForm