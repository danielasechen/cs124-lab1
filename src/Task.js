import "./Task.css";
import CheckButton from "./CheckButton";

function Task(props) {

    return <div>
        <div className="task" id={props.id}>
            <CheckButton
                id={props.id} value={props.value}
                isAdd={false}
                completed={props.completed}
                onTaskChangeField={props.onTaskChangeField}
            />
            <input
                type="text"
                className="task_text"
                onChange={
                    (e) =>
                        props.onTaskChangeField(props.id, "value", e.target.value)
                }
                onBlur={() => console.log("Blurred")}
                value={props.value}
                placeholder={"Add new task"}
            />
        </div>
    </div>;
}

export default Task;