import "./App.css";
import ListItem from "./components/ListItem";
import Form from "./components/Form";
import { useState, useEffect } from "react";

function App() {
  const [taskList, setTaskList] = useState([]);

  // set up a state that shows whether or not the tasks are currently visible
  // const array = useState(true);
  // const isVisible = array[0];
  // const setIsVisible = array[1];
  // ... we can do array destructuring instead:
  const [isVisible, setIsVisible] = useState(true);
  const [newPost, setNewPost] = useState(false);
  const [error, setError] = useState(null);

  async function addTask(task) {
    const response = await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    setNewPost(true);
  }

  useEffect(() => {
    async function fetchTasks() {
      try {
        setError(null);
        const response = await fetch("http://localhost:3000/todo");
        if (!response.ok) {
          throw new Error("unexpected error fetching data")
        }
        const data = await response.json();
        setTaskList(data);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
      }
    }
    fetchTasks();
    setNewPost(false);
  }, [newPost]);

  return (
    <>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide task list" : "Show task list"}
      </button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {isVisible && (
        <ol>
          {taskList.map((task) => (
            <ListItem key={task.id} task={task} />
          ))}
        </ol>
      )}
      <Form addTask={addTask} />
    </>
  );
}

export default App;
