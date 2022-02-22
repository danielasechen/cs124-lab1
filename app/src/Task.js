import TaskList from "./TaskList";
import "./Task.css";

function Task(props) {

    return <div className="task" id={props.id} >
        <div className="reg_round" >
            <input type="checkbox" className="reg_checkbox"
                   checked={props.completed}
                   onChange={e => {props.onCheck(props.id, e.target.checked)}}/>
                {/*<label htmlFor="reg_checkbox" />*/}
        </div>
        <input type="text" className="task_text" defaultValue={props.value}/>
    </div>;
}

export default Task;