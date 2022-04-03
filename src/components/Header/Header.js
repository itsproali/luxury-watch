import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className='bg-pink-100 p-3 sticky top-0 shadow-md z-10'>
            <div onClick={() => setOpen(!open)} className='text-pink-600 w-8 cursor-pointer block md:hidden'>
                    {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
                </div>
            <ul className={`bg-pink-100 flex flex-col sm:flex-row items-center justify-center absolute top-14 z-10 md:flex md:top-0 left-0 w-full md:sticky ${open ? 'block' : 'hidden'}`}>
                <li className='p-2 mx-3 hover:text-pink-600 ease-linear duration-200 border-y-2 border-transparent hover:border-y-2 hover:border-pink-600'><Link to='/'>HOME</Link></li>
                <li className='p-2 mx-3 hover:text-pink-600 ease-linear duration-200 border-y-2 border-transparent hover:border-y-2 hover:border-pink-600'><Link to='/reviews'>REVIEWS</Link></li>
                <li className='p-2 mx-3 hover:text-pink-600 ease-linear duration-200 border-y-2 border-transparent hover:border-y-2 hover:border-pink-600'><Link to='/dashboard'>DASHBOARD</Link></li>
                <li className='p-2 mx-3 hover:text-pink-600 ease-linear duration-200 border-y-2 border-transparent hover:border-y-2 hover:border-pink-600'><Link to='/blog'>BLOG</Link></li>
                <li className='p-2 mx-3 hover:text-pink-600 ease-linear duration-200 border-y-2 border-transparent hover:border-y-2 hover:border-pink-600'><Link to='/about'>ABOUT</Link></li>
            </ul> 
        </nav>
    );
};

export default Header;