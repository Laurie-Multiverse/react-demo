import './App.css'
import ListItem from './components/ListItem'
import Form from './components/Form'
import { useState } from 'react';

function App() {
  const [taskList, setTaskList] = useState([
    {
      id: 1,
      title: "have breakfast",
      description: "2 eggs on toast",
      time: "7 am"
    }, {
      id: 2,
      title: "Cardio",
      description: "Jog 5km",
      time: "8 am",
    }, {
      id: 3,
      title: "Start Work",
      description: "Log onto machine and open all relevant software",
      time: "9am",
    },
  ]);

  // set up a state that shows whether or not the tasks are currently visible
  // const array = useState(true);
  // const isVisible = array[0];
  // const setIsVisible = array[1];
  // ... we can do array destructuring instead:
  const [isVisible, setIsVisible] = useState(true);

  function addTask(task) {
    setTaskList([...taskList, task]);
  }

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
