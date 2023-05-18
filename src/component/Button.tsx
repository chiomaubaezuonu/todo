import React, { FC, useState } from 'react'
import spinner from "../images/spinner.svg";
import { and } from 'firebase/firestore';


const Button = (props:React.PropsWithChildren & {loading:boolean}) => {
    const { loading, children }  = props

    return (
        <div>
            <button type='submit' className='bg-teal-400 flex justify-center w-full px-4 py-3'>
                {children}
                {loading && <img src={spinner} className=" w-6 ml-4 " alt='spinner-icon' />}
            </button>
        </div>
    )
}

export default Button