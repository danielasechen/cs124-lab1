import Task from './Task';
import "./TaskList.css";
import {useState} from "react";

function TaskList(props) {

    return <div className="tasks">
        {
            props.data.map(task => <Task key={task.id} {...task}
                                         isAdd={false}
                                         onTaskChangeField={props.onTaskChangeField}
                                    />)
        }
        <Task isAdd={true}
              value=""
              onTaskChangeField={props.onTaskChangeField}
              onAddTask={props.onAddTask} />
    </div>
}

export default TaskList;