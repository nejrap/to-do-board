import logo from "./logo.svg";
import "./App.css";
import Input from "./components/Input";
import { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <>
      <h1>To do board</h1>
      <Input taskList={taskList} setTaskList={setTaskList} />
      <div>
        {taskList.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </div>
    </>
  );
}

export default App;
