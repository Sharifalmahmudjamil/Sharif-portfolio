import { XMarkIcon } from '@heroicons/react/20/solid'
import React from 'react'

 interface props{
    nav:boolean;
    closedNav:()=>void;
 }

const MobileNav = ({nav,closedNav}:props) => {

    const navAnimation= nav?"translate-x-0":"translate-x-[-100%]"

  return (
    <div className={`fixed ${navAnimation}  transform transition-all duration-300 top-0 left-0 right-0 z-[10000] bg-[#09101a]`}>

        <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center'>
        <div className='nav-link-mobile'>Home</div>
    <div className='nav-link-mobile'>About</div>
    <div className='nav-link-mobile'>Skills</div>
    <div className='nav-link-mobile'>Education</div>
    <div className='nav-link-mobile'>Projects</div>
    <div className='nav-link-mobile'>Contact</div>
        </div>
        <div
        onClick={closedNav} 
        className='absolute cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-cyan-400'>
            <XMarkIcon></XMarkIcon>
        </div>
    </div>

  )
}

export default MobileNav