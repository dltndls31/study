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
                {/*$ 기호는 문자열 템플릿 리터럴(string template literal)*/}
                <span
                    className={`font-bold ${completed ? 'line-through' : ''}`}
                >
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
        <div className="... rounded border-4 border-double border-black">
            {task.map((taskItem, index) => (
                <div key={index}>
                    <TaskBox taskItem={taskItem} index={index} />
                    <DatePicker
                        selected={new Date(taskItem.date)}
                        readOnly
                        dateFormat="yyyy-MM-dd"
                        className="font-bold"
                    />
                    <p>{taskItem.content}</p>
                    <div className="flex justify-end">
                        <button
                            onClick={() => StartEditing(index)}
                            className="rounded-full bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
                        >
                            수정
                        </button>
                        <button
                            onClick={() => DeleteTask(index)}
                            className="rounded-full bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
                        >
                            삭제
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Task
