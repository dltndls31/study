import React, { useEffect, useState } from 'react'
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
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        if (editingIndex !== -1) {
            setValue('title', task[editingIndex].title)
            setValue('content', task[editingIndex].content)
        }
    }, [editingIndex, setValue, task])

    const Submit = (data) => {
        if (editingIndex !== -1) {
            const updatedPosts = [...task]
            updatedPosts[editingIndex] = data
            setTask(updatedPosts)
            setEditingIndex(-1)
            toast.success('EDITED !')
        } else {
            setTask([...task, data])
        }
        reset()
    }

    return (
        <form
            className="flex flex-col border-4 border-double border-indigo-600"
            onSubmit={handleSubmit(Submit)}
        >
            <input {...register('title')} placeholder="제목" required />
            <DatePicker selected={date} onChange={(date) => setDate(date)} />
            <input {...register('content')} placeholder="내용" />
            <button type="submit">
                {editingIndex !== -1 ? '저장' : '게시'}
            </button>
        </form>
    )
}

export default TaskInput
