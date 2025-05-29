import { useState } from "react";

function Form({ taskList, setTaskList }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setTaskList([...taskList, { title, description, time }]);
  }

  return (
    <form>
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        Add Task
      </button>
    </form>
  );
}

export default Form;
