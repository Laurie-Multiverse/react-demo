import './App.css'
import ListItem from './components/ListItem'
import Form from './components/Form'
import { useState, useEffect } from 'react';

function App() {
  const [taskList, setTaskList] = useState([]);

  // set up a state that shows whether or not the tasks are currently visible
  // const array = useState(true);
  // const isVisible = array[0];
  // const setIsVisible = array[1];
  // ... we can do array destructuring instead:
  const [isVisible, setIsVisible] = useState(true);
  const [newPost, setNewPost] = useState(false);

  async function addTask(task) {    
    const response = await fetch('http://localhost:3000/todos', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(task)
    })
    setNewPost(true);
  }

  async function fetchTasks() {
    const response = await fetch('http://localhost:3000/todos')
    const data = await response.json();
    setTaskList(data);
  }

  useEffect( () => {
    fetchTasks();
    setNewPost(false);
  }, [newPost])

  return (
    <>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide task list" : "Show task list"}
      </button>
      {
        isVisible && (
          <ol>
            {
              taskList.map(task => <ListItem key={task.id} task={task} />)
            }
          </ol>
        )
      }
      <Form addTask={addTask}/>
    </>
  )

}

export default App
