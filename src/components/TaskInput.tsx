// 필요한 라이브러리 및 컴포넌트를 임포트
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAtom } from 'jotai'
import { MyTaskAtom, editingPostIndexAtom } from '@/atoms/MyTask'
import { toast } from 'react-toastify'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

// TaskInput 컴포넌트 정의
const TaskInput = () => {
    // react-hook-form에서 제공하는 함수 사용
    const { register, handleSubmit, setValue, reset } = useForm()

    // jotai의 useAtom 훅을 사용하여 상태와 상태 설정 함수를 가져옴
    const [task, setTask] = useAtom(MyTaskAtom)
    const [editingIndex, setEditingIndex] = useAtom(editingPostIndexAtom)

    // 현재 선택된 날짜를 관리하는 상태
    const TaskDate = new Date('yyyy-MM-dd')

    // 특정 조건에서 폼에 값을 설정하는 useEffect
    useEffect(() => {
        if (editingIndex !== -1) {
            setValue('title', task[editingIndex].title)
            setValue('content', task[editingIndex].content)
        }
    }, [editingIndex, setValue, task])

    // 폼 제출 시 실행되는 함수
    const Submit = (data) => {
        const newTask = {
            title: data.title,
            content: data.content,
            isCompleted: false, // 초기에는 false로 설정
        }

        if (editingIndex !== -1) {
            // 수정 중인 게시물이 있다면
            const updatedPosts = [...task]
            updatedPosts[editingIndex] = newTask
            setTask(updatedPosts)
            setEditingIndex(-1)
            toast.success('수정되었습니다 !!!')
        } else {
            // 새 게시물을 추가
            setTask([...task, newTask])
            toast.success('추가되었습니다 !!!')
        }
        reset() // 폼을 초기화
    }

    return (
        <form
            className="flex flex-col border-4 border-double border-indigo-600"
            onSubmit={handleSubmit(Submit)}
        >
            <textarea {...register('title')} placeholder="제목" required />
            <DatePicker
                selected={new Date()}
                onChange={(date) => new Date(date)}
            />
            <textarea {...register('content')} placeholder="내용" />
            <label>
                완료 여부:
                <input type="checkbox" {...register('isCompleted')} />
            </label>
            <button type="submit">
                {editingIndex !== -1 ? '저장' : '추가'}
            </button>
        </form>
    )
}

// TaskInput 컴포넌트를 다른 파일에서 사용할 수 있도록 내보냄
export default TaskInput
