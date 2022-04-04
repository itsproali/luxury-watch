import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import { NavLink } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className='bg-pink-100 p-3 sticky top-0 shadow-md z-10'>
            <div onClick={() => setOpen(!open)} className='text-pink-600 w-8 cursor-pointer block md:hidden'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <ul className={`bg-pink-100 flex flex-col sm:flex-row items-center justify-center absolute top-14 z-10 md:flex md:top-0 left-0 w-full md:sticky ${open ? 'block' : 'hidden'}`}>
                <li className='mx-4 p-2'><NavLink className='navlink' to='/'>HOME</NavLink></li>
                <li className='mx-4 p-2'><NavLink className='navlink' to='/reviews'>REVIEWS</NavLink></li>
                <li className='mx-4 p-2'><NavLink className='navlink' to='/dashboard'>DASHBOARD</NavLink></li>
                <li className='mx-4 p-2'><NavLink className='navlink' to='/blog'>BLOG</NavLink></li>
                <li className='mx-4 p-2'><NavLink className='navlink' to='/about'>ABOUT</NavLink></li>
            </ul>
        </nav>
    );
};

export default Header;