import TaskList from "./TaskList";
import "./Task.css";

function Task(props) {

    return <div className="task" id={props.id} >
        <div className="reg_round" >
            <input type="checkbox" className="reg_checkbox"
                   checked={props.completed}
                   />
                <label htmlFor="reg_checkbox"
                       onClick={e => {props.onTaskChangeField(props.id, "completed", !props.completed)}}/>
        </div>
        <input
            type="text"
            className="task_text"
            onChange={
                (e) =>
                    props.onTaskChangeField(props.id, "value", e.target.value)
            }
            value={props.value}/>
    </div>;
}

export default Task;