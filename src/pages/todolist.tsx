import Task from '@/components/Task'
import TaskInput from '@/components/TaskInput'
import { Provider } from 'jotai'

const ToDoList = () => {
    return (
        <Provider>
            <div className="flex">
                <div className="w-1/2 pl-2 pr-2">
                    <Task />
                </div>
                <div className="w-1/2 pl-2 pr-2">
                    <TaskInput />
                </div>
            </div>
        </Provider>
    )
}

export default ToDoList
