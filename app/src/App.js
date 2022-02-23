import React from 'react';
import './App.css';
import Header from './Header.js';
import TaskList from './TaskList.js';
import Buttons from './Buttons.js';
import {useState} from "react";



function App(props) {

    const [data, setData] = useState(props.initialData);
    const [showOnlyUncomplete, setShowOnlyUncomplete] = useState(false);

    function handleCheck(taskId) {
        console.log(taskId);
        const newData = data.map(task => task.id === taskId ?
                            {...task, ["completed"]:!task.completed} : task);
        setData(newData);
        console.log(data);
    }

    function handleChangeField(taskId, field, value) {
        setData(data.map(
            t => t.id === taskId ? {...t, [field]:value} : t
        ))
        console.log(data);
    }

    const filteredData = data.filter(t => !t.completed);

    return (
      <div className="App">
        <Header/>
          <TaskList data={showOnlyUncomplete ? filteredData : data}
                    onCheck={handleCheck}
                    onTaskChangeField={handleChangeField}/>
          <Buttons onToggleCompletedItems={() => setShowOnlyUncomplete(!showOnlyUncomplete)} />
      </div>
    );
}

export default App;
