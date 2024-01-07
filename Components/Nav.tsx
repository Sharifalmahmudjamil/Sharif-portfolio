

import { Bars3Icon } from '@heroicons/react/20/solid'


import React from 'react'
import { Link } from "react-scroll/modules";

interface props {
    openNav: ()=> void;
}

const Nav = ({openNav}:props) => {


  return <div className='w-[100%] fixed z-[10000] top-0 h-20 bg-[#141c27] shadow-md'>
    <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
    <h1 className='flex[0.6] cursor-pointer text-[25px] text-cyan-400 font-bold font-signature '>Sharif
    <span className='text-white mx-3'>Portfolio</span>
    </h1>
    

    <Link activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={500}>
    <div className='nav-link'>Home</div>
    </Link>
    
    <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500}>
    <div className='nav-link'id='2'>About</div>
    </Link>

    <Link activeClass="active" to="skills" spy={true} smooth={true} offset={0} duration={500}>
    <div className='nav-link'>Skills</div>
    </Link>
    
    <Link activeClass="active" to="education" spy={true} smooth={true} offset={0} duration={500}>
    <div className='nav-link'>Education</div>
    </Link>

    <Link activeClass="active" to="project" spy={true} smooth={true} offset={0} duration={500}>
    <div className='nav-link'>Projects</div>
    </Link>

    <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={500}>
    <div className='nav-link'>Contact</div>
    </Link>
    
    <div onClick={openNav}>
       <Bars3Icon className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-cyan-400'></Bars3Icon>
    </div>
    </div>
    
  </div>
 
}

export default Nav