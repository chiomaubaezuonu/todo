import React, { FC, ChangeEvent, useState, useEffect, useContext } from 'react';
import plusImg from "../images/plusImg.png";
import { onAuthStateChanged } from "firebase/auth";
import { ITask } from "../interfaces"
import { json } from 'stream/consumers';
import { auth } from '../fbConfig';
import { nameContext } from '../App';
import Navbar from '../component/Navbar';


const TodoPage: FC = () => {
    const { presentUser, setPresentUser } = useContext(nameContext)
    const { currentUser } = auth;
    const [appUser, setAppUser] = useState<null | {}>(null)
    const [task, setTask] = useState<string>("")
    const [showInputBox, setShowInputBox] = useState(false)
    const [newTask, setNewTask] = useState(false)
    const [deadline, setDeadline] = useState<number>(0)
    const [todoList, setTodoList] = useState<ITask[]>([])
    const [isCompleted, setIsCompleted] = useState(false)
    // useEffect(() => {
    //    const data: string|null|undefined = window.localStorage.getItem('USERNAME')
    //    setShowName(JSON.parse(data))
    // }, [])
    // useEffect(() => {   
    //     window.localStorage.setItem('USERNAME', JSON.stringify(showName))
    // }, [showName])

    useEffect(() => {
        const loggedIn = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAppUser(user)

            } else {
                setAppUser(null)
            }
        })
        return () => {
            loggedIn();
        }
    }, [])

    useEffect(() => {
        const loggedInUser = localStorage.getItem('USERNAME');
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setPresentUser(foundUser);

        }
    }, []);

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
        if(task.trim() === ""){
            alert("Please enter a valid task")
            return;
        }
        setNewTask(false)
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
    const handleCheckBox = (taskName: ITask) => {
        //todoList.map((item, index) => {
        if (taskName.id === todoList.indexOf(taskName) + 1) {
            return setIsCompleted(prev => !prev)
        }

        console.log(taskName.id)
        console.log(todoList.indexOf(taskName))


        // })
    }
    const addNewTask = () => {
        setNewTask(true)

    }
    return (
        <div className='mx-8'>
               <Navbar />
            <div className='bg-teal-400 h-fit py-12  w-full  px-6  flex flex-col justify-center items-center'>
                <h1 className='text-xl md:text-3xl my-3'> Keep a track of your tasks {presentUser}</h1>
                {newTask && <div> <div className='flex min-w-full items-center'>
                    <input onChange={handleChange} required value={task} name='task' className='w-full p-3 my-2 mr-8 rounded-md' placeholder='Add Task...' />
                    {/* <img  className='w-8 h-8 my-2 ml-2 cursor-pointer' src={plusImg} alt='plus-img' /> */}
                  <p>Task</p>  
                </div>
                    <hr></hr>
                    <div className='flex min-w-full items-center'>
                        <input onChange={handleChange} required value={deadline} name='deadline' className='w-full p-3 mr-2 rounded-md my-2' placeholder='Add Deadline...' />
                        {/* <img className='w-8 h-8 my-3 ml-2 cursor-pointer' src={plusImg} alt='plus-img' /> */}
                        <p>Deadline</p>
                    </div></div>}
                    {newTask &&<button className='bg-teal-100 py-1 px-5 rounded-md'onClick={addTask}>Save</button>}
            </div>
            <div className='bg-teal-100 h-screen'>
                <div className='flex justify-around pt-6'>
                    <h1 className='text-3xl my-4'>Task List</h1>
                    {/* <h1>Deadline</h1>
                    <h1>delete</h1>
                    <h1>Completed</h1> */}
                </div>
                <div className='flex flex-col mx-auto bg-white items-center  rounded-s-3xl rounded-e-3xl'>
                    <div className='flex justify-around w-full'>
                        <h2>Daily tasks</h2>
                        <img onClick={addNewTask} className='w-6 bg-teal-500 h-6 my-3 ml-2 cursor-pointer' src={plusImg} alt='plus-img' />
                    </div>
                    <div className='flex gap-4 text-xl my-4 w-full'>
                        <h1>Task</h1>
                        <h1>Deadline</h1>
                        <h1>Completed</h1>
                    </div>
                    {todoList.map((item, index) => {

                        return <div key={item.id} className={`w-full flex mb-4  justify-around ${isCompleted ? 'bg-green-400' : ""}`}>

                            <div className='bg-purple-300 w-20 left-0'>{item.taskName}</div>
                            <div className='text-black bg-green-200 w-20'>{item.taskDeadline}</div>
                            <button onClick={() => deleteTask(item)} className='bg-red-500 text-lg rounded-md px-2 text-center text-white'>X</button>
                            <input type='checkbox' checked={isCompleted} onChange={() => handleCheckBox(item)} className='w-8 cursor-pointer' />
                            {/* <button onClick={() => handleCompletedTask(item)}>Completed</button> */}
                            {/* <div>
                                <h1>Tasks</h1>
                                <ul className='flex bg-yellow-400'>

                                    <li className=' flex flex-col text-blue-400'> {item.taskName}</li>
                                    <li className=' flex flex-col text-blue-400'>{item.taskDeadline}</li>
                                </ul>
                            </div> */}
                        </div>
                        //</div>
                    })}
                </div>

            </div>
        </div >
    )
}

export default TodoPage