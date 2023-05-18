import React, { ChangeEvent, FC, useContext, useEffect, useState } from 'react';
import { auth, db } from "../fbConfig";
import { signInWithEmailAndPassword, getAuth, onAuthStateChanged, UserCredential } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { nameContext } from '../App';



const Login: FC = () => {
    //const auth = getAuth()
    const { presentUser, setPresentUser } = useContext(nameContext);
    const navigate = useNavigate()
    const [currentUser, setCurrentUser] = useState<string>(presentUser)
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                if (userCredential) {
                    navigate("/todo")

                }
            })

    }
    useEffect(() => {
        const loggedInUser = localStorage.getItem('USERNAME');
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setPresentUser(foundUser);
           
        }
    }, []);

    // useEffect(() => {
    //     window.localStorage.setItem('USERNAME', JSON.stringify(presentUser))
       
    // }, [presentUser]);
    

    return (
        <div className='bg-teal-100 h-full lg:h-full px-8 flex flex-col pt-12 lg:pt-4 pb-4  items-center'>
            <form onSubmit={handleSubmit} className='w-full flex flex-col items-center'>
                <h1 className='text-4xl mt-16 lg:mt-8 lg:mb-4 mb-8'>Welcome Onboard {presentUser}!</h1>
                <p className='text-xl md:text-2xl mb-8'>Let's help you meet up your tasks.</p>
                <div className='flex flex-col justify-center w-full px-6 items-center'>
                    {/* <input onChange={(e) => setPresentUser(e.target.value)} value={presentUser} type='text' className='w-full p-5 mb-8 rounded-r-3xl rounded-l-3xl' placeholder='Name' /> */}
                    <input onChange={(e) => { setEmail(e.target.value) }} value={email} type='email' className='w-full p-5 mb-8 rounded-r-3xl rounded-l-3xl' placeholder='Email' />
                    <input onChange={(e) => { setPassword(e.target.value) }} value={password} type='password' className='w-full p-5 mb-8 rounded-r-3xl rounded-l-3xl' placeholder='Password' />
                    <button type='submit' className='bg-teal-400 w-full px-4 py-3'>Login</button>
                    <div className='flex mt-10 w-full'>
                        <p className='text-xl lg:text-2xl mr-2' >Don't have an account?</p>
                        <Link to='/signup' className='text-xl lg:text-2xl underline' >Sign Up</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;


// useEffect(() => {
    //     const data = localStorage.getItem('USERNAME')
    //     //console.log(window.localStorage.getItem('USERNAME'))
    //     //setPresentUser(data !== null && data !== "" ? JSON.parse(data) : data)
    //     if(data){
    //        setPresentUser(JSON.parse(data))
    //     }

    // }, [])


    // useEffect(() => {
    //     window.localStorage.setItem('USERNAME', JSON.stringify(currentUser))

    // }, [currentUser]);