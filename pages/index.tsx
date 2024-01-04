import Hero from '@/Components/Hero';
import MobileNav from '@/Components/MobileNav';
import Nav from '@/Components/Nav';
import React, { useState } from 'react'

const Homepage = () => {

    const [nav,setNav]= useState(false);
    const openNav =()=> setNav(true);
    const closedNav=()=> setNav(false);
  return <div className='overflow-x-hidden'>
    <div>
        {/* Navbar */}
        <MobileNav nav={nav} closedNav={closedNav}></MobileNav>
        <Nav openNav={openNav}></Nav>
        {/* hero section */}
        <Hero></Hero>
    </div>
  </div> 
};

export default Homepage