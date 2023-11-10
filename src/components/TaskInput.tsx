import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useAtom } from 'jotai'
import { MyTaskAtom, editingPostIndexAtom } from '@/atoms/MyTask'
import { toast } from 'react-toastify'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const TaskInput = () => {
    const { register, handleSubmit, setValue, reset } = useForm()
    const [task, setTask] = useAtom(MyTaskAtom)
    const [editingIndex, setEditingIndex] = useAtom(editingPostIndexAtom)
    const [TaskDate, setTaskDate] = useState(new Date())

    useEffect(() => {
        if (editingIndex !== -1) {
            setValue('title', task[editingIndex].title)
            setValue('content', task[editingIndex].content)
        }
    }, [editingIndex, setValue, task])

    const Submit = (data) => {
        const newTask = {
            title: data.title,
            content: data.content,
            isCompleted: false,
            date: TaskDate,
        }

        if (editingIndex !== -1) {
            const updatedPosts = [...task]
            updatedPosts[editingIndex] = newTask
            setTask(updatedPosts)
            setEditingIndex(-1)
            toast.success('수정되었습니다 !!!')
        } else {
            setTask([...task, newTask])
            toast.success('추가되었습니다 !!!')
        }
        reset()
    }

    return (
        <form
            className="flex flex-col rounded border-4 border-double border-black"
            onSubmit={handleSubmit(Submit)}
        >
            <textarea {...register('title')} placeholder="제목" required />
            <DatePicker
                selected={TaskDate}
                onChange={(date) => setTaskDate(date)}
                required
                dateFormat="yyyy-MM-dd"
            />
            <textarea {...register('content')} placeholder="내용" />
            <button
                type="submit"
                className={`${
                    editingIndex !== -1
                        ? 'bg-green-500 hover:bg-green-700'
                        : 'bg-green-500 hover:bg-green-700'
                } rounded-full px-4 py-2 font-bold text-white`}
            >
                {editingIndex !== -1 ? '저장' : '추가'}
            </button>
        </form>
    )
}

export default TaskInput
