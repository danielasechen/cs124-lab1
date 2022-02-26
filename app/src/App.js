import React from 'react';
import './App.css';
import Header from './Header.js';
import TaskList from './TaskList.js';
import BottomButtons from './BottomButtons.js';
import {useState} from "react";


function App(props) {
    const [data, setData] = useState(props.initialData);
    const [showOnlyUncomplete, setShowOnlyUncomplete] = useState(false);
    const [nextId, setNextId] = useState(data.length + 1);

    function handleChangeField(taskId, field, value) {
        console.log(taskId)
        setData(data.map(
            t => t.id === taskId ? {...t, [field]:value} : t
        ))
        console.log(data);
    }

    function handleClearCompleted() {
        setData(data.filter(task => !task.completed))
    }

    function handleAddTask(taskValue) {
        const newTask = { id: "task"+String(nextId),
                          value: taskValue,
                          completed: false };
        setNextId(nextId + 1);
        setData([].concat(data, [newTask]));
        console.log(newTask, data);
    }

    const filteredData = data.filter(t => !t.completed);

    return (
      <div className="App">
        <Header/>
          <TaskList data={showOnlyUncomplete ? filteredData : data}
                    onTaskChangeField={handleChangeField}
                    onAddTask={handleAddTask}/>
          <BottomButtons onToggleCompletedItems={() => setShowOnlyUncomplete(!showOnlyUncomplete)}
                         onClearCompletedItems={() => handleClearCompleted()} />
      </div>
    );
}

export default App;
