import Task from './Task';
import "./TaskList.css";
import CheckButton from "./CheckButton";

function TaskList(props) {

    return <div className="tasks">
        {
            props.data.map(task => <Task key={task.id} {...task}
                                         isAdd={false}
                                         onTaskChangeField={props.onTaskChangeField}
                                         onItemDeleted={props.onItemDeleted}
                                    />)
        }
        <CheckButton id="add_task" isAdd={true} onAddTask={props.onAddTask} />
    </div>
}

export default TaskList;