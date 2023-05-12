import React, { ChangeEvent, FC, useState } from 'react';
import { auth } from "../fbConfig";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';



const SignUp: FC = () => {
    //const auth = getAuth()
    const navigate = useNavigate()
    const [currentUser, setCurrentUser] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                if (userCredential) {
                    navigate("/login")
                    console.log(userCredential)
                }
            })
    }
    return (
        <div className='bg-teal-100 h-full lg:h-full flex flex-col pt-12 lg:pt-4 pb-4  items-center'>
            <form onSubmit={handleSubmit} className='w-full flex flex-col items-center'>
                <h1 className='text-4xl mt-16 lg:mt-8 lg:mb-4 mb-8'>Welcome Onboard!</h1>
                <p className='text-xl md:text-2xl mb-8'>Let's help you meet up your tasks.</p>
                <div className='flex flex-col justify-center w-full px-6 items-center'>
                    <input onChange={(e) => { setCurrentUser(e.target.value) }} value={currentUser} type='text' className='w-full p-5 mb-8 rounded-r-3xl rounded-l-3xl' placeholder='Name' />
                    <input onChange={(e) => { setEmail(e.target.value) }} value={email} type='email' className='w-full p-5 mb-8 rounded-r-3xl rounded-l-3xl' placeholder='Email' />
                    <input onChange={(e) => { setPassword(e.target.value) }} value={password} type='password' className='w-full p-5 mb-8 rounded-r-3xl rounded-l-3xl' placeholder='Password' />
                    <button type='submit' className='bg-teal-400 w-full px-4 py-3'>Register</button>
                    <div className='flex mt-10 w-full'>
                        <p className='text-xl lg:text-2xl mr-2' >Already have an account?</p>
                        <Link to='/login' className='text-xl lg:text-2xl underline' >Sign in</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignUp