import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai"
import { programsDrowdown  } from '../constants'

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false)
  return (
    <header className='header'>
       <NavLink to='/' className="w-30 h-10 rounded-lg bg-white p-2 items-center justify-center flex font-bold shadow-md">
          <p className='blue-gradient_text '>KidsLovesCode</p>
       </NavLink>
       <nav className='flex text-lg gap-7 font-medium'>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
             About
          </NavLink>
          <NavLink className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'} onClick={() => setIsOpen((prev) =>!prev)}>
             <div className='flex justify-between'>
                        Programs
                        {!isOpen ? ( 
                     <AiOutlineCaretDown className='h-8' />
                  ) : ( 
                     <AiOutlineCaretUp className='h-8' />)
               }
             </div>
      {isOpen && (
         
         <div className=''>
            {programsDrowdown.map((program, i) => (
               <NavLink to={program.link} className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                  <h3>{program.title}</h3>
               </NavLink>
            )) }
         </div>
      
         
      )}
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
             Contact 
          </NavLink>
       </nav>
    </header>
  )
}

export default Navbar