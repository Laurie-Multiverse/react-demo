import './App.css'

function App() {
  const data = [
    {
      title: "have breakfast",
      description: "2 eggs on toast",
      time: "7 am"
    }, {
      title: "Cardio",
      description: "Jog 5km",
      time: "8 am",
    }, {
      title: "Start Work",
      description: "Log onto machine and open all relevant software",
      time: "9am",
    },
  ]
  return (
    <>
      <ol>
        {
          data.map(task => (
            <>
              <li>
                <h2>{task.title}</h2>
                <p>Description: {task.description}</p>
                <p>Time: {task.time}</p>
              </li>
            </>
          ))
        }
      </ol>
    </>
  )

}

export default App
