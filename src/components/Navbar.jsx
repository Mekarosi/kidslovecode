import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
       <NavLink to='/' className="w-30 h-10 rounded-lg bg-white p-2 items-center justify-center flex font-bold shadow-md">
          <p className='blue-gradient_text '>KidsLovesCode</p>
       </NavLink>
       <nav className='flex text-lg gap-7 font-medium'>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
             About
          </NavLink>
          <NavLink to="/activities" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
             Activities
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
             Contact 
          </NavLink>
       </nav>
    </header>
  )
}

export default Navbar