import React, { FC, ChangeEvent, useState } from 'react';
import plusImg from "../images/plusImg.png";
import { ITask } from "../interfaces"

const TodoPage: FC = () => {
    const [task, setTask] = useState<string>("")
    const [deadline, setDeadline] = useState<number>(0)
    const [todoList, setTodoList] = useState<ITask[]>([])

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        event.preventDefault()
        if (event.target.name === "task") {
            setTask(event.target.value)
        } else {
            setDeadline(Number(event.target.value))
        }
    }
    const addTask = (): void => {
        const myTask = {
            taskName: task,
            taskDeadline: deadline
        }

        setTodoList([...todoList, myTask])
        setTask(" ")
        setDeadline(0)

    }

    return (
        <div className=''>
            <div className='bg-blue-300 h-fit py-12 px-6 flex flex-col justify-center items-center'>
                <h1 className='text-4xl my-3'> Welcome onboard</h1>
                <div className='flex w-full'>
                    <input onChange={handleChange} value={task} name='task' className='w-full p-3 my-3 rounded-md' placeholder='Add Task...' />
                    <img onClick={addTask} className='w-8 h-8 my-3 ml-4 cursor-pointer' src={plusImg} alt='plus-img' />
                </div>
                <hr></hr>
                <div className='flex w-full'>
                    <input onChange={handleChange} value={deadline} name='deadline' className='w-full p-3 rounded-md' placeholder='Add Deadline...' />
                    <img className='w-8 h-8 my-3 ml-4 cursor-pointer' src={plusImg} alt='plus-img' />
                </div>
            </div>
            <div className='bg-blue-200 h-screen'>
            <h1>Task List</h1>
                {todoList.map((list) => {
                   
                    return <div className='flex py-6'>
                        
                        <div className='mr-2  text-black'>{list.taskName}</div>
                        <div className='text-white bg-blue-900 w-7 text-center'>{list.taskDeadline}</div>
                    </div>
                })}
            </div>
        </div >
    )
}

export default TodoPage