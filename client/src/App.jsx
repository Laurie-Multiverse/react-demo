import './App.css'
import ListItem from './components/ListItem'

function App() {
  const data = [
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
  ]
  return (
    <>
      <ol>
        {
          data.map(task => <ListItem key={task.id} task={task} />)
        }
      </ol>
    </>
  )

}

export default App
