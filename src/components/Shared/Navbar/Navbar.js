import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
    return (
     <div className='flex justify-between'>
         <div className='p-1'>
             <NavLink to='/home' className='text-white text-4xl font-semibold'>TS</NavLink>
         </div>
            <div className='flex justify-end'>
           <NavLink className="mr-2 hover:text-blue-300 text-xl font-mono text-white" to='/home'>Home</NavLink>
           <NavLink className="mr-2 hover:text-blue-300 text-xl font-mono text-white" to='/about'>About</NavLink>
           <NavLink className="mr-2 hover:text-blue-300 text-xl font-mono text-white" to='/projects'>Projects</NavLink>
           <NavLink className="mr-2 hover:text-blue-300 text-xl font-mono text-white" to='/contact'>Contact</NavLink>
        </div>
     </div>
    );
};

export default Navbar;