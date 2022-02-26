import "./Task.css";

function Task(props) {

    const isAddTask = props.id === "add_task";

    return <div className="task" id={props.id} >
        <div className={isAddTask ? "add_round" : "reg_round"}>
            <input type="checkbox" className={isAddTask? "add_checkbox" : "reg_checkbox"}
                   disabled={isAddTask}
                   checked={props.completed}
                   />
                <label htmlFor="reg_checkbox"
                       onClick={e => {isAddTask? props.onAddTask(props.value) :
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
            placeholder={isAddTask ? "add new task" : ""}
        />
    </div>;
}

export default Task;