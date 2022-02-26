import "./Task.css";

function Task(props) {

    return <div className="task" id={props.id} >
        <div className={props.isAdd ? "add_round" : "reg_round"}>
            <input type="checkbox" className={props.isAdd ? "add_checkbox" : "reg_checkbox"}
                   disabled={props.isAdd}
                   checked={props.completed}
                   />
                <label htmlFor="reg_checkbox"
                       onClick={e => {props.isAdd ? props.onAddTask(props.value) :
                           props.onTaskChangeField(props.id, "completed", !props.completed)}}
                />
        </div>
        <input
            type="text"
            className="task_text"
            onChange={
                (e) =>
                    props.onTaskChangeField(props.id, "value", e.target.value)
            }
            value={props.value}
            placeholder={props.isAdd ? "add new task" : ""}
        />
    </div>;
}

export default Task;