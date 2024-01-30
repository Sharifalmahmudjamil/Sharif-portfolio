import { XMarkIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { Link } from 'react-scroll';

 interface props{
    nav:boolean;
    closedNav:()=>void;
 }

const MobileNav = ({nav,closedNav}:props) => {

    const navAnimation= nav?"translate-x-0":"translate-x-[-100%]"

  return (
    <div className={`fixed ${navAnimation}  transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#09101a]`}>

        <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center'>
        <Link activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={500}>
        <div className='nav-link-mobile'>Home</div>
    </Link>
    <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500}>
    <div className='nav-link-mobile'id='2'>About</div>
    </Link>
    <Link activeClass="active" to="skills" spy={true} smooth={true} offset={0} duration={500}>
    <div className='nav-link-mobile'>Skills</div>
    </Link>

    <Link activeClass="active" to="education" spy={true} smooth={true} offset={0} duration={500}>
    <div className='nav-link-mobile'>Education</div>
    </Link>

    <Link activeClass="active" to="project" spy={true} smooth={true} offset={0} duration={500}>
    <div className='nav-link-mobile'>Projects</div>
    </Link>

    <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={500}>
    <div className='nav-link-mobile'>Contact</div>
    </Link>
  
        </div>
        <div
        onClick={closedNav} 
        className='absolute z-[100000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-cyan-400'>
            <XMarkIcon></XMarkIcon>
        </div>
    </div>

  )
}

export default MobileNav