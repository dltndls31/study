import React from 'react'
import { useAtom } from 'jotai'
import { myTextAtom, editingPostIndexAtom } from '@/atoms/myText'

const Post = () => {
    const [posts, setPosts] = useAtom(myTextAtom)
    const [, setEditingIndex] = useAtom(editingPostIndexAtom)

    const deletePost = (index) => {
        const updatedPosts = [...posts]
        updatedPosts.splice(index, 1)
        setPosts(updatedPosts)
    }

    const startEditing = (index) => {
        setEditingIndex(index)
    }

    return (
        <div className="... border-4 border-double border-indigo-600">
            {posts.map((post, index) => (
                <div key={index}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <button onClick={() => deletePost(index)}>삭제</button>
                    <button onClick={() => startEditing(index)}>수정</button>
                </div>
            ))}
        </div>
    )
}

export default Post
