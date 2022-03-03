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

    const filteredData = data.filter(t => !t.completed);

    function handleChangeField(taskId, field, value) {
        setData(data.map(
            t => t.id === taskId ? {...t, [field]:value} : t
        ))
    }

    function handleItemDeleted(taskID) {
        setData(data.filter((task) => task.id !== taskID));
    }

    function handleClearCompleted() {
        setData(data.filter(task => !task.completed))
    }

    function handleAddTask(taskValue) {
        for (let task in data) {
            if (task.value === "" || task.value === "Add new task") {
                console.log("Empty Item");
            }
        }
        const newTask = { id: "task"+String(nextId),
                          value: taskValue,
                          completed: false };
        setNextId(nextId + 1);
        setData([].concat(data, [newTask]));
    }

    const regBgColor = "white";
    const newBgColor = "radial-gradient(rgb(0, 114, 185), rgb(0, 60, 255))";
    const regTxtColor = "rgb(15, 116, 231)";
    const newTxtColor = "white";

    function handleToggleCompletedItems(event) {
        setShowOnlyUncomplete(!showOnlyUncomplete);
        event.target.style.color = showOnlyUncomplete ? regTxtColor : newTxtColor;
        event.target.style.background = showOnlyUncomplete ? regBgColor : newBgColor;
    }

    function mouseOver(event) {
        event.target.style.background = showOnlyUncomplete ? regBgColor : newBgColor;
        event.target.style.color = showOnlyUncomplete ? regTxtColor : newTxtColor;
    }

    function mouseOut(event) {
        event.target.style.background = showOnlyUncomplete ? newBgColor : regBgColor;
        event.target.style.color = showOnlyUncomplete ? newTxtColor : regTxtColor;
    }


    return (
      <div className="App">
        <Header/>
          <TaskList data={showOnlyUncomplete ? filteredData : data}
                    onTaskChangeField={handleChangeField}
                    onAddTask={handleAddTask}
                    onItemDeleted={handleItemDeleted}/>
          <BottomButtons onToggleCompletedItems={(e) => handleToggleCompletedItems(e)}
                         onClearCompletedItems={() => handleClearCompleted()}
                         onMouseOver={(e) => mouseOver(e)}
                         onMouseOut={(e) => mouseOut(e)}
                         isShowOnlyUncomplete={showOnlyUncomplete}/>
      </div>
    );
}

export default App;
