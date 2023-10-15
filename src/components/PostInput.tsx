import React from 'react'
import { useForm } from 'react-hook-form'
import { useAtom } from 'jotai'
import { myTextAtom, editingPostIndexAtom } from '@/atoms/myText'

const PostInput = () => {
    const { register, handleSubmit, setValue, reset } = useForm()
    const [posts, setPosts] = useAtom(myTextAtom)
    const [editingIndex, setEditingIndex] = useAtom(editingPostIndexAtom)

    React.useEffect(() => {
        if (editingIndex !== -1) {
            setValue('title', posts[editingIndex].title)
            setValue('content', posts[editingIndex].content)
        }
    }, [editingIndex, setValue, posts])

    const onSubmit = (data) => {
        if (editingIndex !== -1) {
            const updatedPosts = [...posts]
            updatedPosts[editingIndex] = data
            setPosts(updatedPosts)
            setEditingIndex(-1)
        } else {
            setPosts([...posts, data])
        }
        reset()
    }

    return (
        <form
            className="... flex-col border-4 border-double border-indigo-600"
            onSubmit={handleSubmit(onSubmit)}
        >
            <input {...register('title')} placeholder="제목" required />
            <input {...register('content')} placeholder="내용" required />
            <button type="submit">
                {editingIndex !== -1 ? '저장' : '게시'}
            </button>
        </form>
    )
}

export default PostInput
