import { useState } from "react";

function Form({ addTask }) {
  //   const [title, setTitle] = useState("");
  //   const [description, setDescription] = useState("");
  //   const [time, setTime] = useState("");
  const [task, setTask] = useState({
    title: "",
    description: "",
    time: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    addTask(task);
    setTask({
      title: "",
      description: "",
      time: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="title"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="description"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
      />
      <input
        type="text"
        placeholder="time"
        value={task.time}
        onChange={(e) => setTask({ ...task, time: e.target.value })}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default Form;
