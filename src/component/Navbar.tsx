import React, { FC, useState } from 'react';
import dropdown from "../images/dropdown.png";
import { Link, useNavigate } from 'react-router-dom';
import { auth } from "../fbConfig";
import { signOut } from 'firebase/auth'

const Navbar: FC = () => {
    const navigate = useNavigate()
    const [openDropdown, setOpenDropdown] = useState<boolean>(false)

    const handleDropdown = () => {
        setOpenDropdown(!openDropdown)
    }
    const signOutUser = () => {
        signOut(auth).then(() => {
            navigate("/")
        })
    }
    return (
        <div className=''>
            <div className='p-5 md:px-12 md:py-3 flex justify-between'>
                <h1 className='text-3xl'>My Todo</h1>
                <div className='hidden flex-row md:block'>
                    <div className='flex gap-10'>
                        <Link to='/'><h1 className='hover:bg-teal-400 cursor-pointer'>Home</h1></Link>
                        <Link to='/signup'><h1 className='hover:bg-teal-400 cursor-pointer'>Sign up</h1></Link>
                        <Link to='/login'><h1 className='hover:bg-teal-400 cursor-pointer'>Login</h1></Link>
                        <h1 onClick={signOutUser} className='hover:bg-teal-400 cursor-pointer'>Sign out</h1>                    </div>
                </div>
                <div className='md:hidden'>
                    <img onClick={handleDropdown} src={dropdown} alt='dropdown' />
                    {openDropdown &&
                        <div>
                            <Link to='/'><h1 className='hover:bg-teal-400 cursor-pointer'>Home</h1></Link>
                            <Link to='/signup'><h1 className='hover:bg-teal-400 cursor-pointer'>Sign up</h1></Link>
                            <Link to='/login'><h1 className='hover:bg-teal-400 cursor-pointer'>Login</h1></Link>
                            <h1 onClick={signOutUser} className='hover:bg-teal-400 cursor-pointer'>Sign out</h1>
                        </div>}
                </div>
            </div>

        </div>

    )
}

export default Navbar