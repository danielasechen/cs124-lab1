import Task from './Task';

function TaskList(props) {
    return <div className="tasks">
        {
            props.data.map(task => <Task key={task.id} {...task} />)
        }
    </div>;
}

export default TaskList;