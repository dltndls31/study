import React, { useState } from 'react'
import { useAtom } from 'jotai'
import { MyTaskAtom, editingPostIndexAtom } from '@/atoms/MyTask'
import { toast } from 'react-toastify'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const Task = () => {
    const [task, setTask] = useAtom(MyTaskAtom)
    const [, setEditingIndex] = useAtom(editingPostIndexAtom)

    const TaskBox = ({ task }) => {
        const [completed, setCompleted] = useState(false)

        return (
            <div className="flex items-center">
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => setCompleted(!completed)}
                    className="ml-2 mr-2"
                />
                <span className={completed ? 'line-through' : ''}>{task}</span>
            </div>
        )
    }

    const deleteTask = (index) => {
        const updatedTask = [...task]
        updatedTask.splice(index, 1)
        setTask(updatedTask)
        toast.success('DELETED !')
    }

    const startEditing = (index) => {
        setEditingIndex(index)
    }

    return (
        <div className="... border-4 border-double border-indigo-600">
            {task.map((task, index) => (
                <div key={index}>
                    <TaskBox task={task.title} />
                    <p>{task.content}</p>
                    <button onClick={() => deleteTask(index)}>삭제</button>
                    <button onClick={() => startEditing(index)}>수정</button>
                </div>
            ))}
        </div>
    )
}

export default Task
