import './App.css';
import Header from './Header.js';
import TaskList from './TaskList.js';
import Buttons from './Buttons.js';

const data = [
    {
        id: "task1",
        value: "Buy new John Grisham book"
    }
];

function App() {
  return (
      <div className="App">
        <Header/>
          <TaskList data={data}/>
          <Buttons/>
      </div>

  );
}

export default App;
