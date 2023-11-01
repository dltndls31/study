import React, { useState } from 'react'
import { useAtom } from 'jotai'
import { MyTaskAtom, editingPostIndexAtom } from '@/atoms/MyTask'
import { toast } from 'react-toastify'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const Task = () => {
    const [task, setTask] = useAtom(MyTaskAtom)
    const [, setEditingIndex] = useAtom(editingPostIndexAtom)

    const TaskBox = ({ taskItem, index }) => {
        const [completed, setCompleted] = useState(taskItem.isCompleted)

        const TaskCompleted = () => {
            setCompleted(!completed)

            const updatedTask = [...task]
            updatedTask[index].isCompleted = !completed
            setTask(updatedTask)

            if (!completed) {
                toast.success('완료되었습니다 !!!')
            } else {
                toast.error('취소되었습니다 !!!')
            }
        }

        return (
            <div className="flex items-center">
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={TaskCompleted}
                    className="ml-2 mr-2"
                />
                <span className={completed ? 'line-through' : ''}>
                    {taskItem.title}
                </span>
            </div>
        )
    }

    const DeleteTask = (index) => {
        const updatedTask = [...task]
        updatedTask.splice(index, 1)
        setTask(updatedTask)
        toast.success('삭제되었습니다 !!!')
    }

    const StartEditing = (index) => {
        setEditingIndex(index)
    }

    return (
        <div className="... border-4 border-double border-indigo-600">
            {task.map((taskItem, index) => (
                <div key={index}>
                    <TaskBox taskItem={taskItem} index={index} />
                    <DatePicker
                        selected={new Date(taskItem.date)} // taskItem.date를 Date 객체로 변환
                        readOnly
                        dateFormat="yyyy-MM-dd" // 포맷 수정
                    />

                    <p>{taskItem.content}</p>
                    <button onClick={() => DeleteTask(index)}>삭제</button>
                    <button onClick={() => StartEditing(index)}>수정</button>
                </div>
            ))}
        </div>
    )
}

export default Task
