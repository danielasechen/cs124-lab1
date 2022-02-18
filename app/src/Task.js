import TaskList from "./TaskList";
import "./Task.css";

function Task(props) {
    return <div className="task" id={props.id}>
        <div className="reg_round">
            <input type="checkbox" className="reg_checkbox" />
                <label htmlFor="check2"></label>
        </div>
        <input type="text" className="task_text" value={props.value}/>
    </div>;
}

export default Task;