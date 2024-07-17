import { useState } from "react";

const Input = () => {
  const [input, setInput] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
  };
  console.log(input);
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Add a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button>Add</button>
      </form>
    </>
  );
};

export default Input;
