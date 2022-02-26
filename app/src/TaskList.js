import Task from './Task';
import "./TaskList.css";
import {useState} from "react";

function TaskList(props) {

    return <div className="tasks">
        {
            props.data.map(task => <Task key={task.id} {...task}
                                         onTaskChangeField={props.onTaskChangeField}
                                    />)
        }
        <Task id="add_task"
              value=""
              key="add_task"
              onTaskChangeField={props.onTaskChangeField}
              onAddTask={props.onAddTask} />
    </div>
}

export default TaskList;