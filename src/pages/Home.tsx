import React, { FC } from 'react';
import '../App.css';
import tick from "../images/tick.png"
import { Link } from 'react-router-dom';

const Home: FC = () => {

    // const handleClick = () => {
    //     alert("yes")
    // }
    return (
        <div className="App  md:h-screen h-screen bg-blue-300 flex flex-col  md:my-0 md:justify-center items-center py-12">
            <div className='md:w-3/4 h-screen md:h-fit lg:md:h-screen bg-white rounded-xl mx-4 my-8 md:my-0 px-4 py-9 md:py-16'>
                <img className='w-18 ml-0 h-10 bg-white' src={tick} alt='tick' />
                <h3 className='text-3xl md:text-2xl text-black opacity-50 py-5 md:py-10'>Welcome to...</h3>
                <h1 className='text-5xl md:text-4xl text-black py-5 md:py-10'>My Todo</h1>
                <p className='text-2xl md:text-3xl text-black opacity-50 py-10'>Get things done and stay organized with My Todo App </p>
                <Link to="/signup"> <button className='bg-blue-400 text-white rounded my-5 p-3 text-2xl cursor-pointer'>Get Started</button>
                </Link>
            </div>
        </div>
    )
}

export default Home;