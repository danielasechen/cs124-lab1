import React from 'react';
import './App.css';
import Header from './Header.js';
import TaskList from './TaskList.js';
import Buttons from './Buttons.js';
import {useState} from "react";



function App(props) {

    const [data, setData] = useState(props.initialData);

    function handleCheck(taskId, isChecked) {
        console.log(taskId);
        const newData = data.map(task => task.id === taskId ?
                            {...task, ["completed"]:isChecked} : task);
        setData(newData);
        console.log(data);
    }

    return (
      <div className="App">
        <Header/>
          <TaskList data={data}
                    onCheck={handleCheck} />
          <Buttons clickedShowOnlyUncomplete={false} />
      </div>
    );
}

export default App;
