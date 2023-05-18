import React, { ChangeEvent, FC, useContext, useState, useEffect } from 'react';
import { auth } from "../fbConfig";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { nameContext } from "../App"
import spinner from "../images/spinner.svg"
import Button from '../component/Button';


const SignUp: FC = () => {
    //const auth = getAuth()
    const navigate = useNavigate()
    const [currentUser, setCurrentUser] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    const { presentUser, setPresentUser } = useContext(nameContext);




    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        setLoading(true)
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                if (userCredential) {
                    navigate("/login")

                }
                setLoading(false)
            })

    }

    useEffect(() => {
        const data = localStorage.getItem('USERNAME')
        //console.log(window.localStorage.getItem('USERNAME'))
        // setPresentUser(data !== null && data !== "" ? JSON.parse(data) : data)
        if (data) {
            let thisUser = (JSON.parse(data))
            setPresentUser(thisUser)
        }

    }, [])
   
    useEffect(() => {
        window.localStorage.setItem('USERNAME', JSON.stringify(presentUser))
       
    }, [presentUser]);
    useEffect(() => {
        setCurrentUser(presentUser)
    })

    return (
        <div className='bg-teal-100 h-full lg:h-full flex flex-col px-8 pt-12 lg:pt-4 pb-4  items-center'>
            <form onSubmit={handleSubmit} className='w-full flex flex-col items-center'>
                <h1 className='text-4xl mt-16 lg:mt-8 lg:mb-4 mb-8'>Welcome Onboard!</h1>
                <p className='text-xl md:text-2xl mb-8'>{presentUser}, Let's help you meet up your tasks.</p>
                <div className='flex flex-col justify-center w-full px-6 items-center'>
                    <input onChange={(e) => setPresentUser(e.target.value)} value={presentUser} type='text' className='w-full p-5 mb-8 rounded-r-3xl rounded-l-3xl' placeholder='Name' />
                    <input onChange={(e) => { setEmail(e.target.value) }} value={email} type='email' className='w-full p-5 mb-8 rounded-r-3xl rounded-l-3xl' placeholder='Email' />
                    <input onChange={(e) => { setPassword(e.target.value) }} value={password} type='password' className='w-full p-5 mb-8 rounded-r-3xl rounded-l-3xl' placeholder='Password' />
                    <Button loading={loading}> Register</Button>
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