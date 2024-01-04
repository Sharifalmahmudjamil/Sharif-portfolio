

import { Bars3Icon } from '@heroicons/react/20/solid'
import React from 'react'

interface props {
    openNav: ()=> void;
}

const Nav = ({openNav}:props) => {
  return <div className='w-[100%] fixed z-[10000] top-0 h-20 bg-[#141c27] shadow-md'>
    <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
    <h1 className='flex[0.6] cursor-pointer text-[25px] text-cyan-400 font-bold font-signature '>Sharif
    <span className='text-white mx-3'>Portfolio</span>
    </h1>
    
    <div className='nav-link'>Home</div>
    <div className='nav-link'>About</div>
    <div className='nav-link'>Skills</div>
    <div className='nav-link'>Education</div>
    <div className='nav-link'>Projects</div>
    <div className='nav-link'>Contact</div>
    <div onClick={openNav}>
       <Bars3Icon className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-cyan-400'></Bars3Icon>
    </div>
    </div>
  </div>
 
}

export default Nav