import PostInput from '@/components/PostInput'
import Post from '@/components/Post'
import { Provider } from 'jotai'

const PostPage = () => {
    return (
        <Provider>
            <PostInput />
            <Post />
        </Provider>
    )
}

export default PostPage
