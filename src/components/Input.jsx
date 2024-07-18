import { useState } from "react";
import "../App.css";

const Input = ({ taskList, setTaskList }) => {
  const [input, setInput] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setTaskList((prevTaskList) => [...prevTaskList, input]);
      setInput("");
    }
  };

  return (
    <>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Add a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default Input;
