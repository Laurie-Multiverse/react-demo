function ListItem(props) {
    const task = props.task;

    return (
        <>
            <li>
                <h2>{task.title}</h2>
                <p>Description: {task.description}</p>
                <p>Time: {task.time}</p>
            </li>
        </>
    )
}

export default ListItem