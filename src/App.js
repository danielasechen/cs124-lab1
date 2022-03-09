import React from 'react';
import './App.css';
import Header from './Header.js';
import TaskList from './TaskList.js';
import BottomButtons from './BottomButtons.js';
import {useState} from "react";


function App(props) {
    const [data, setData] = useState(props.initialData);
    const [hideCompleted, setHideCompleted] = useState(false);
    const [nextId, setNextId] = useState(data.length + 1);

    const uncompletedData = data.filter(t => !t.completed);

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
        for (const task of data) {
            if (task.value === "") {
                return;
            }
        }
        const newTask = { id: "task"+String(nextId),
                          value: taskValue,
                          completed: false };
        setNextId(nextId + 1);
        setData([...data, newTask]);
    }

    function handleToggleCompletedItems(event) {
        setHideCompleted(!hideCompleted);
    }

    function mouseOver(event) {
        event.target.style.background = hideCompleted ? regBgColor : newBgColor;
        event.target.style.color = hideCompleted ? regTxtColor : newTxtColor;
    }

    function mouseOut(event) {
        event.target.style.background = hideCompleted ? newBgColor : regBgColor;
        event.target.style.color = hideCompleted ? newTxtColor : regTxtColor;
    }


    return (
      <div className="App">
        <Header/>
          <TaskList data={hideCompleted ? uncompletedData : data}
                    onTaskChangeField={handleChangeField}
                    onAddTask={handleAddTask}
                    onItemDeleted={handleItemDeleted}/>
          <BottomButtons onToggleCompletedItems={(e) => handleToggleCompletedItems(e)}
                         onClearCompletedItems={() => handleClearCompleted()}
                         onMouseOver={(e) => mouseOver(e)}
                         onMouseOut={(e) => mouseOut(e)}
                         isHideCompleted={hideCompleted}/>
      </div>
    );
}

export default App;
