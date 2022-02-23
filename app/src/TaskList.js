import Task from './Task';
import {useState} from "react";

function TaskList(props) {
    // const [showOnlyUncomplete, setShowOnlyUncomplete] = useState(false);
    // const filteredTasks = props.data.filter(task => !task.completed);
    // console.log(filteredTasks);

    return <div className="tasks">
        {
            props.data.map(task => <Task key={task.id} {...task}
                                    onCheck={props.onCheck}
                                    onTaskChangeField={props.onTaskChangeField}/>)
        }
    </div>;
}

export default TaskList;