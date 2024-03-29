import About from '@/Components/About';
import Education from '@/Components/Education';
import Hero from '@/Components/Hero';
import MobileNav from '@/Components/MobileNav';
import Nav from '@/Components/Nav';
import React, { useState } from 'react'
import MySkills from '@/Components/MySkills';
import Project from '@/Components/Project';
import Contact from '@/Components/Contact';
import Footer from '@/Components/Footer';


const Homepage = () => {

    const [nav,setNav]= useState(false);
    const openNav =()=> setNav(true);
    const closedNav=()=> setNav(false);
  return <div className='overflow-x-hidden'>
    <div id='home'>
        {/* Navbar */}
        <MobileNav nav={nav} closedNav={closedNav}></MobileNav>
        <Nav openNav={openNav}></Nav>
        {/* hero section */}
        <Hero></Hero>
        {/* about section */}
        <div className='relative z-[30]'>
          <About></About>
          {/* Education */}
          <Education></Education>
          {/* skill section */}
          <MySkills></MySkills>
          {/* project */}
          <Project></Project>
          {/* contact */}
          <Contact></Contact>
          {/* footer */}
          <Footer></Footer>
        </div>
    </div>
  </div> 
};

export default Homepage