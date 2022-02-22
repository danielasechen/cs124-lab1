import TaskList from "./TaskList";
import "./Task.css";

function Task(props) {

    return <div className="task" id={props.id} >
        <div className="reg_round" >
            <input type="checkbox" className="reg_checkbox"
                   defaultChecked={props.completed}
                   />
                <label htmlFor="reg_checkbox"
                       onClick={e => {props.onCheck(props.id)}}/>
        </div>
        <input type="text" className="task_text" defaultValue={props.value}/>
    </div>;
}

export default Task;