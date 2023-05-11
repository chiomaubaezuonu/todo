import React, { FC, ChangeEvent, useState } from 'react';
import plusImg from "../images/plusImg.png";
import { ITask } from "../interfaces"

const TodoPage: FC = () => {
    const [task, setTask] = useState<string>("")
    const [deadline, setDeadline] = useState<number>(0)
    const [todoList, setTodoList] = useState<ITask[]>([])
    const [isCompleted, setIsCompleted] = useState<boolean>(false)

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
            id: todoList.length === 0 ? 1 : todoList.length + 1,
            taskName: task,
            taskDeadline: deadline,
            //complete: false
        }
        console.log(myTask.id)
        setTodoList([...todoList, myTask])
        setTask(" ")
        setDeadline(0)
    }

    const deleteTask = (taskName: ITask) => {
        const newList = todoList.filter((task) => {
            return task.id === taskName.id ? false : true
            //return task !== taskName

        })
        setTodoList(newList)

    }
    const handleCompletedTask = (taskName: ITask) => {
        //todoList.map((item, index) => {
            //console.log(taskName.id)
            //console.log(index)
            

            return setIsCompleted(prev => !prev)
       // })
    }

    return (
        <div className=''>
            <div className='bg-blue-300 h-fit py-12 w-full  px-6 flex flex-col justify-center items-center'>
                <h1 className='text-3xl my-3'> Welcome onboard</h1>
                <div className='flex min-w-full'>
                    <input onChange={handleChange} value={task} name='task' className='w-full p-3 my-2 rounded-md' placeholder='Add Task...' />
                    <img onClick={addTask} className='w-8 h-8 my-2 ml-2 cursor-pointer' src={plusImg} alt='plus-img' />
                </div>
                <hr></hr>
                <div className='flex min-w-full'>
                    <input onChange={handleChange} value={deadline} name='deadline' className='w-full p-3 rounded-md my-2' placeholder='Add Deadline...' />
                    <img onClick={addTask} className='w-8 h-8 my-3 ml-2 cursor-pointer' src={plusImg} alt='plus-img' />
                </div>
            </div>
            <div className='bg-blue-200 h-screen'>
                <div className='flex justify-around pt-6'>
                    <h1>Task List</h1>
                    <h1>Deadline</h1>
                    <h1>delete</h1>
                    <h1>Completed</h1>
                </div>
                {todoList.map((item, index) => {

                    return <div className='flex pt-16   justify-around' key={item.taskName}>
                        {/* <p>{list.id}</p> */}
                        <div className={`w-full flex justify-around ${isCompleted ? 'bg-green-400' : ""}`}>
                            <div className=''>{item.taskName}</div>
                            <div className='text-white bg-blue-900 w-7 p-0 text-center'>{item.taskDeadline}</div>
                            <button onClick={() => deleteTask(item)} className='bg-red-500 text-lg rounded-md px-2 text-center text-white'>X</button>
                            {/* <input type='checkbox' onChange={complete} className='w-8 cursor-pointer' /> */}
                            <button onClick={() => handleCompletedTask(item)}>Completed</button>
                            {/* {isCompleted === true ? <p className='bg-green-500'>yes</p> : <p>No</p>} */}
                        </div>
                    </div>
                })}
            </div>
        </div >
    )
}

export default TodoPage