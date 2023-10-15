import { useState, useEffect } from 'react'

const ToDoList = () => {
    const [toDoArray, setToDoArray] = useState([])

    const addToDo = (e) => {
        e.preventDefault()
        setToDoArray([...toDoArray, e.target.todo.value])
        e.target.todo.value = ''
    }

useEffect ( () => {
    console.log(toDoArray);
    console.log("toDoArray 값 바뀜!");
}, [toDoArray]);

    return (
        <div>
            <p>My To Do List</p>
            <form onSubmit={addToDo}>
                <input
                    type='text'
                    name='todo'
                    style={{ boxShadow: '0 0 4px #000' }}
                />
                <button type='submit'>add To Do</button>
            </form>
            {toDoArray.map((toDo) => (
                <div key={toDo}>
                    <p>{toDo}</p>
                </div>
            ))}
        </div>
    )
}

export default ToDoList